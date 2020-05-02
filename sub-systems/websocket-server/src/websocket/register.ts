import socketIo from 'socket.io'
import http from 'http'
import Logger from './logging'
import Server from './websocket-server'
import { setupOnConnection } from './connection'

export default (server: http.Server) => {
  const io = socketIo(server, { path: '/socket.io' })
  Server.setup(io)
  setupOnConnection(io)
}
