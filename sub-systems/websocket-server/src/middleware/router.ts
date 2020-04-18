import Router from 'koa-router'
import Koa from 'koa'
import setupInstrumentation from './instrumentation'

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  const router = new Router()

  setupInstrumentation(router)

  app.use(router.routes())
  app.use(router.allowedMethods())
}
