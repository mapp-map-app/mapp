import Logger from '../logging';

export const setupOnDisconnect = (socket: SocketIO.Socket) => {
  socket.on('disconnect', function () {
    Logger.log(`disconnecting ${socket.conn.id}`);
  });
};
