import Router from 'koa-router';
import { getById } from '../../../persistance/repositories/rooms';

export const get = (router: Router) =>
  router.get('/rooms/:roomId', async (ctx) => {
    const room = await getById(ctx.params.roomId);

    if (!room) {
      ctx.status = 404;
      return;
    }

    ctx.body = room;
  });
