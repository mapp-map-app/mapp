import { get } from './get'
import byObjectId from './{objectId}'
import { put } from './put'

export default [get, put, ...byObjectId]
