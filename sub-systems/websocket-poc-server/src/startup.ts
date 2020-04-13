import Koa from 'koa'
import http from 'http'
import socketIo from 'socket.io'
import registerMiddleware from './middleware/register';

const port = 3000;

export default () => {
  const app = new Koa()
  registerMiddleware(app)
  const server = http.createServer(app.callback())
  const io = socketIo(server)
  io.on('connection', (socket) => {
    console.log('connection!', socket.conn)
  })
  console.log(`Starting http server up on port ${port}`)
  server.listen(port)
}