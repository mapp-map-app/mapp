import status from 'statuses'
import Router from 'koa-router'

export const get = (router: Router) =>
  router.get(['/healthy', '/ready'], (ctx) => {
    ctx.status = status('ok')
  })
