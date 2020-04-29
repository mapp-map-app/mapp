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
}
