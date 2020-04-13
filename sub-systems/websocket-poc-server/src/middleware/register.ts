import Koa from 'koa'
import logger from 'koa-logger'
import Router from 'koa-router'
import { register, collectDefaultMetrics } from 'prom-client'
import status from 'statuses';

const getRouter = () => {
  const router = new Router()

  collectDefaultMetrics()

  router.get('/metrics', ctx => {
    ctx.set('Content-Type', register.contentType);
    ctx.body = register.metrics()
  })

  router.get(['/healthy', '/ready'], ctx => {
    ctx.status = status('ok')
  })

  router.get('/', ctx => {
    ctx.body = 'koa!!'
  })

  return router
}

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  app.use(logger())
  const router = getRouter()
  app.use(router.routes())
  app.use(router.allowedMethods())
};
