import Router from 'koa-router'
import { update } from '../../../../persistance/repositories/room-objects'
import status from 'statuses'
import { RoomObject } from '../../../../persistance/db'

export const put = (router: Router) =>
  router.put('/rooms/:roomId/room-objects', async (ctx) => {
    const roomObect = <RoomObject>ctx.request.body

    console.log({ roomObect })

    if (!roomObect) {
      ctx.status = status(400)
      return
    }

    const updatedRoomObject = await update(roomObect)
    ctx.body = updatedRoomObject
  })
