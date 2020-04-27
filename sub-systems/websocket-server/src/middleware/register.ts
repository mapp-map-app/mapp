import Koa from 'koa'
import logger from 'koa-logger'
import setupRouting from './router'
import bodyParser from 'koa-bodyparser'

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  app.use(bodyParser())
  app.use(logger())
  setupRouting(app)
}
