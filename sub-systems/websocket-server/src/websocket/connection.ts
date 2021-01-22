import Logger from './logging';
import eventHandlerSetupFunctions from './event-handlers';

export const setupOnConnection = (io: SocketIO.Server) => {
  io.on('connection', (socket: SocketIO.Socket) => {
    socket.join('logViewers');
    Logger.log(`connected ${socket.conn.id}`);

    eventHandlerSetupFunctions.forEach((eventHandlerSetupFunction) => {
      eventHandlerSetupFunction(socket);
    });
  });
};
