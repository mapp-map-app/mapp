import Router from 'koa-router';
import { getById as getRoomObjectById } from '../../../../../persistance/repositories/room-objects';
import { getById as getRoomById } from '../../../../../persistance/repositories/rooms';

export const get = (router: Router) =>
  router.get('/rooms/:roomId/room-objects/:roomObjectId', async (ctx) => {
    const room = await getRoomById(ctx.params.roomId);
    const roomObject = await getRoomObjectById(ctx.params.roomObjectId);
    if (!room || !roomObject) {
      ctx.status = 404;
      return;
    }
    ctx.body = roomObject;
  });
