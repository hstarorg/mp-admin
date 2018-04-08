import * as Router from 'koa-router';
import config from '../config';

const router = new Router({
  prefix: ``
});

router.get('/test', async ctx => {
  ctx.body = 'ok';
});

module.exports = { router };
