export default class Server {
  private static io: SocketIO.Server;

  private constructor() {}

  static getInstance = () => Server.io;

  static setup(io: SocketIO.Server) {
    Server.io = io;
  }
}
