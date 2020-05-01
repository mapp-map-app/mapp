import Koa from 'koa'
import logger from 'koa-logger'
import setupRouting from './router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

export default (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  app.use(cors({
    origin:'http://localhost:3000'
  }))
  app.use(bodyParser())
  app.use(logger())
  setupRouting(app)
}
