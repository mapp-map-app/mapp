import Router from 'koa-router'
import { update, getById } from '../../../persistance/repositories/rooms'
import status from 'statuses'
import { Room } from '../../../../../types/types'

export const put = (router: Router) =>
  router.put('/rooms/:roomId', async (ctx) => {
    const room = <Room>ctx.request.body
    const oldRoom = await getById(ctx.params.roomId)

    if (!oldRoom) {
      ctx.status = status(404)
      return
    }

    if (room.id !== oldRoom.id) {
      ctx.status = status(400)
      return
    }

    const updatedRoom = await update(room)
    ctx.body = updatedRoom
  })
