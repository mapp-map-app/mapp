import low from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'
import { Database } from './db'
import lodashId from 'lodash-id'
import shortId from 'shortid'

export const startupDatabase = async () => {
  const adapter = new FileAsync('../../db.json')

  const db = await low(adapter)
  db._.mixin(lodashId)
  db._.createId = () => shortId.generate().slice(0, 4)

  await db
    .defaults({
      rooms: [],
      objects: [],
    })
    .write()

  Database.setup(db)
}
