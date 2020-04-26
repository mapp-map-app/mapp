import socketIo from 'socket.io'

export default class Logger {
  private static io: socketIo.Server

  private constructor() {}

  static log = (message: string) => {
    Logger.io.volatile.of('/poc').in('logViewers').emit('log', message)
    console.log(message)
  }

  static setup(io: socketIo.Server) {
    Logger.io = io
  }
}
