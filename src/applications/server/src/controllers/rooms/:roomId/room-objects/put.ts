import Router from 'koa-router';
import { update } from '../../../../persistance/repositories/room-objects';
import { getById } from '../../../../persistance/repositories/rooms';
import { RoomObject } from 'mapp-types';

export const put = (router: Router) =>
  router.put('/rooms/:roomId/room-objects', async (ctx) => {
    const roomObect = <RoomObject>ctx.request.body;

    if (!roomObect) {
      ctx.status = 400;
      return;
    }

    const room = await getById(ctx.params.roomId);

    if (!room) {
      ctx.status = 409;
      return;
    }

    roomObect.roomId = ctx.params.roomId;

    const updatedRoomObject = await update(roomObect);
    ctx.body = updatedRoomObject;
  });
