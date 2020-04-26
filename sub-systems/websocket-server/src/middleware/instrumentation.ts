import { register, collectDefaultMetrics } from 'prom-client'
import status from 'statuses'
import Router from 'koa-router'

export default (router: Router) => {
  collectDefaultMetrics()

  router.get('/metrics', (ctx) => {
    ctx.set('Content-Type', register.contentType)
    ctx.body = register.metrics()
  })

  router.get(['/healthy', '/ready'], (ctx) => {
    ctx.status = status('ok')
  })

  router.get('/', (ctx) => {
    ctx.body = 'koa!!'
  })
}
