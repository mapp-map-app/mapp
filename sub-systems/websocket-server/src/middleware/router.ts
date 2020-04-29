import Router from 'koa-router'
import Koa from 'koa'
import controllers from '../controllers'

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  const router = new Router()

  controllers.forEach((controller) => controller(router))

  app.use(router.routes())
  app.use(router.allowedMethods())
}
