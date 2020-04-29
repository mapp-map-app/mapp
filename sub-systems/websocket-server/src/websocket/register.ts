import socketIo from 'socket.io'
import http from 'http'
import Logger from './logging'
import Server from './websocket-server'

export default (server: http.Server) => {
  const io = socketIo(server, { path: '/socket.io' })
  Server.setup(io)
  io.of('/poc').on('connection', (socket) => {
    socket.join('logViewers').join('uuidWatchers')
    Logger.log(`connected ${socket.conn.id}`)
    socket.on('disconnect', function () {
      Logger.log(`disconnecting ${socket.conn.id}`)
    })
  })
}
