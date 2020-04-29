import socketIo from 'socket.io'
import Server from './websocket-server'

export default class Logger {
  private constructor() {}

  static log = (message: string, metadata?: any) => {
    console.log(message, metadata)
    Server.getInstance().volatile.in('logViewers').emit('log', message)
  }
}
