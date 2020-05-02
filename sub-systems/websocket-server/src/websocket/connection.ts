import socketIo from 'socket.io'
import Logger from './logging'
import eventHandlerSetupFunctions from './event-handlers'

export const setupOnConnection = (io: socketIo.Server) => {
  io.on('connection', (socket: socketIo.Socket) => {
    socket.join('logViewers')
    Logger.log(`connected ${socket.conn.id}`)

    eventHandlerSetupFunctions.forEach((eventHandlerSetupFunction) => {
      eventHandlerSetupFunction(socket)
    })
  })
}
