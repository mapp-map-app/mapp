import http from 'http';
import Server from './websocket-server';
import { setupOnConnection } from './connection';

export default (server: http.Server) => {
  const io: SocketIO.Server = require('socket.io')(server, {
    path: '/socket.io',
  });
  Server.setup(io);
  setupOnConnection(io);
};
