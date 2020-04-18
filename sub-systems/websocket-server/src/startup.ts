import Koa from 'koa'
import http from 'http'
import registerMiddleware from './middleware/register'
import registerWebsocket from './websocket/register'

const port = 4000;

export default () => {
  const app = new Koa()
  registerMiddleware(app)
  const server = http.createServer(app.callback())
  registerWebsocket(server)

  console.log(`Starting http server up on port ${port}`)
  server.listen(port)
}
