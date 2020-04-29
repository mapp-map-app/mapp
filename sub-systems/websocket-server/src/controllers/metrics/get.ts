import { register, collectDefaultMetrics } from 'prom-client'
import status from 'statuses'
import Router from 'koa-router'

export const get = (router: Router) => {
  collectDefaultMetrics()

  router.get('/metrics', (ctx) => {
    ctx.set('Content-Type', register.contentType)
    ctx.body = register.metrics()
  })
}
