import * as Router from 'koa-router';
import config from '../config';

const router = new Router({
  prefix: `/account`
});

router.get('/', async ctx => {
  ctx.body = 'ok';
});

module.exports = { router };
