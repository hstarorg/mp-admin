import * as Router from 'koa-router';
import { accountBiz } from '../bizs';
import config from '../config';

const router = new Router({
  prefix: `/account`
});

router.get('/', async ctx => {
  ctx.body = 'ok';
});

module.exports = { router };
