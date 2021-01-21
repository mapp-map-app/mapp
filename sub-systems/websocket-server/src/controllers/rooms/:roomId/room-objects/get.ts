import Router from 'koa-router';
import { getByRoomId } from '../../../../persistance/repositories/room-objects';
import { getById } from '../../../../persistance/repositories/rooms';

export const get = (router: Router) =>
  router.get('/rooms/:roomId/room-objects', async (ctx) => {
    const room = await getById(ctx.params.roomId);

    if (!room) {
      ctx.status = 404;
      return;
    }

    const objects = await getByRoomId(ctx.params.roomId);
    ctx.body = objects;
  });
