import Logger from './logging';
import eventHandlerSetupFunctions from './event-handlers';
import { Server, Socket } from 'socket.io';

export const setupOnConnection = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.join('logViewers');
    Logger.log(`connected ${socket.conn.id}`);

    eventHandlerSetupFunctions.forEach((eventHandlerSetupFunction) => {
      eventHandlerSetupFunction(socket);
    });
  });
};
