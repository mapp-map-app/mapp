import { v4 } from 'uuid'
import socketIo from 'socket.io'
import {performance} from 'perf_hooks'
import Stats from 'moving-average'
import Logger from './logging'

export default (io: socketIo.Server) => {
  const stats = new Stats(5000)
  let lastTimestamp:number
  setInterval(() => {
    const uuid = v4()

    io.volatile
      .of('/poc')
      .in('uuidWatchers')
      .emit('uuid', uuid)
    const now = performance.now()
    if (lastTimestamp) stats.push(now, now - lastTimestamp)
    lastTimestamp = now
  }, 100)

  setInterval(() => {
    Logger.log(`server side: ${(60000 / stats.movingAverage()).toFixed(2)} per minute`)
  }, 5000)
}