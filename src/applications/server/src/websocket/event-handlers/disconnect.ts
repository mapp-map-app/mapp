import Logger from '../logging';
import { Socket } from 'socket.io';

export const setupOnDisconnect = (socket: Socket) => {
  socket.on('disconnect', function () {
    Logger.log(`disconnecting ${socket.conn.id}`);
  });
};
