import Lowdb from 'lowdb'
import { Room } from '../../../types/types'
import { RoomObject } from '../../../types/types'

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
