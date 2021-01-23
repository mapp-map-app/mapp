import Router from 'koa-router';
import {
  getById as getRoomObjectById,
  update,
} from '../../../../../persistance/repositories/room-objects';
import { getById as getRoomById } from '../../../../../persistance/repositories/rooms';
import { RoomObject } from 'mapp-types';

export const put = (router: Router) =>
  router.put('/rooms/:roomId/room-objects/:roomObjectId', async (ctx) => {
    const roomObject = <RoomObject>ctx.request.body;

    const room = await getRoomById(ctx.params.roomId);
    const oldRoomObject = await getRoomObjectById(ctx.params.roomObjectId);

    if (!room || !oldRoomObject) {
      ctx.status = 404;
      return;
    }

    if (roomObject.id !== oldRoomObject.id) {
      ctx.status = 400;
      return;
    }

    const updatedRoomObject = await update(roomObject);
    ctx.body = updatedRoomObject;
  });
