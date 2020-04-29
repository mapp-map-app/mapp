import Router from 'koa-router'
import { update } from '../../persistance/repositories/rooms'
import status from 'statuses'
import { Room } from '../../persistance/db'

export const put = (router: Router) =>
  router.put('/rooms', async (ctx) => {
    const room = <Room>ctx.request.body

    if (!room) {
      ctx.status = status(400)
      return
    }

    const updatedRoom = await update(room)
    ctx.body = updatedRoom
  })
