import Server from './websocket-server'
import moment from 'moment'

type LogLevel = 'error' | 'warn' | 'trace' | 'debug' | 'info'

export default class Logger {
  private constructor() {}

  static log = (message: string, metadata: any = {}, level: LogLevel = 'info') => {
    const formattedMessage = `[${moment().format('h:mm:ss.SSS')} ${level}]: ${message}`
    console[level](formattedMessage, {
      ...metadata,
    })
    Server.getInstance().volatile.emit('log', formattedMessage)
  }
}
