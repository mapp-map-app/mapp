import Lowdb from 'lowdb'
import Server from '../websocket/websocket-server'
import Logger from '../websocket/logging'

export interface RoomObject {
  id: string
  roomId: string
  position: {
    x: number
    y: number
  }
  imageUrl: string
}

export interface Room {
  id: string
  description: string
  title: string
  imageUrl: string
}

interface Schema {
  rooms: Array<Room>
  objects: Array<RoomObject>
}

export class Database {
  private constructor() {}
  private static db: Lowdb.LowdbAsync<Schema>
  static setup(db: Lowdb.LowdbAsync<any>) {
    Database.db = db
  }

  static getInstance = () => Database.db

  private static roomObjects = () => Database.db.get('objects')
  private static rooms = () => Database.db.get('rooms')

  static getObjectById = (objectId: string) => Database.roomObjects().find({ id: objectId }).value()
  static updateObject = async (roomObject: RoomObject) => {
    await Database.roomObjects().find({ id: roomObject.id }).assign(roomObject).write()
    Server.getInstance().in(`room-${roomObject.roomId}`).emit('roomObjectChanged', roomObject)
    Logger.log(`Room object ${roomObject.id} (in room ${roomObject.roomId}) changed.`)
  }

  static getObjectsByRoomId = (roomId: string) => Database.roomObjects().filter({ roomId }).value()
  static getRoomById = (id: string) => Database.rooms().find({ id }).value()
  static updateRoom = async (room: Room) => {
    await Database.rooms().find({ id: room.id }).assign(room).write()
    Server.getInstance().in(`room-${room.id}`).emit('roomChanged', room)
    Logger.log(`Room ${room.id} changed.`)
  }
}
