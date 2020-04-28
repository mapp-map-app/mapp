import { get } from './get'
import byRoomId from './:roomId'
import { put } from './put'

export default [get, put, ...byRoomId]
