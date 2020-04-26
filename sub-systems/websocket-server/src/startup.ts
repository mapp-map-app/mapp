import http from 'http'
import registerMiddleware from './middleware/register'
import registerWebsocket from './websocket/register'
import { generateKoa } from './middleware/koa-utils'

const port = 4000

export default () => {
  const app = generateKoa()
  registerMiddleware(app)
  const server = http.createServer(app.callback())
  registerWebsocket(server)

  console.log(`Starting http server up on port ${port}`)
  server.listen(port)
}
