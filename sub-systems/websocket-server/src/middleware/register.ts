import Koa from 'koa'
import logger from 'koa-logger'
import setupRouting from './router'

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  app.use(logger())
  setupRouting(app)
};
