import http from 'http';
import MappServer from './websocket-server';
import { setupOnConnection } from './connection';
import { Server } from 'socket.io';

export default (server: http.Server) => {
  const io: Server = require('socket.io')(server, {
    path: '/socket.io',
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });
  MappServer.setup(io);
  setupOnConnection(io);
};
