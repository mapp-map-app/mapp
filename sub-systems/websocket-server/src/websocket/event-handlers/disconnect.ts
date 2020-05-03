import socketIo from 'socket.io';
import Logger from '../logging';

export const setupOnDisconnect = (socket: socketIo.Socket) => {
  socket.on('disconnect', function () {
    Logger.log(`disconnecting ${socket.conn.id}`);
  });
};
