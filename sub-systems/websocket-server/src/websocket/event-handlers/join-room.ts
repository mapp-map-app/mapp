import socketIo from 'socket.io'
import Logger from '../logging'
import { generateSocketIoRoomName } from '../util/generate-room-name'
import { getById } from '../../persistance/repositories/rooms'

export const setupOnJoinRoom = (socket: socketIo.Socket) => {
  socket.on('joinRoom', async (roomId: string) => {
    const room = await getById(roomId)
    if (!room) {
      Logger.log(`received invalid request to join ${roomId} from ${socket.conn.id}`)
      return
    }
    const roomName = generateSocketIoRoomName(room.id)
    socket.join(roomName)
    Logger.log(`placed ${socket.conn.id} in room ${roomName}`)
  })
}
