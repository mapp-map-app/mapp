import { Database } from '../db';
import Server from '../../websocket/websocket-server';
import Logger from '../../websocket/logging';
import { Room } from '../../../../types/types';
import { generateSocketIoRoomName } from '../../websocket/util/generate-room-name';

const rooms = () => Database.getInstance().get('rooms');

export const getById = async (id: string) => rooms().getById(id).value();
export const getAll = async () => rooms().value();
export const update = async (room: Room) => {
  const upsertedRoom = await rooms().upsert(room).write();
  Server.getInstance()
    .in(generateSocketIoRoomName(room.id))
    .emit('roomChanged', upsertedRoom);
  Logger.log(`Room [${room.id}] changed.`, upsertedRoom);
  return upsertedRoom;
};
