import { getAll } from '../../persistance/repositories/rooms'
import Router from 'koa-router'

export const get = (router: Router) =>
  router.get('/rooms', async (ctx) => {
    ctx.body = await getAll()
  })
