import socketIo from 'socket.io'

export default class Server {
  private static io: socketIo.Server

  private constructor() {}

  static getInstance = () => Server.io

  static setup(io: socketIo.Server) {
    Server.io = io
  }
}
