import Router from 'koa-router'
import { getAll as getAllRoomObjects } from '../../persistance/repositories/room-objects'
import { getAll as getAllRooms } from '../../persistance/repositories/rooms'
import Server from '../../websocket/websocket-server'

export const get =  (router: Router) =>
  router.get(['/stats'], async (ctx) => {
    const [allRooms, allRoomObjects] = await Promise.all([getAllRooms(), getAllRoomObjects()])
    const connections = Object.keys(Server.getInstance().sockets.sockets).length

    ctx.body = {
      rooms: allRooms.length,
      objects: allRoomObjects.length,
      connections
    }
  })
