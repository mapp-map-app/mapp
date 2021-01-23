import Router from 'koa-router';
import { update } from '../../persistance/repositories/rooms';
import { Room } from 'mapp-types';

export const put = (router: Router) =>
  router.put('/rooms', async (ctx) => {
    const room = <Room>ctx.request.body;

    if (!room) {
      ctx.status = 400;
      return;
    }

    const updatedRoom = await update(room);
    ctx.body = updatedRoom;
  });
