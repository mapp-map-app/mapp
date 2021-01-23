import { Server } from 'socket.io';

export default class MappServer {
  private static io: Server;

  private constructor() {}

  static getInstance = () => MappServer.io;

  static setup(io: Server) {
    MappServer.io = io;
  }
}
