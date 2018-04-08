import * as Router from 'koa-router';
const crypto = require('crypto');

import config from '../config';

const router = new Router({
  prefix: ``
});

router.get('/test', async ctx => {
  ctx.body = 'ok';
});

router.get('/weixin', async ctx => {
  const token = config.wxToken, // 自定义，与公众号设置的一致
    signature = ctx.query.signature,
    timestamp = ctx.query.timestamp,
    nonce = ctx.query.nonce;

  // 字典排序
  const arr = [token, timestamp, nonce].sort();

  const sha1 = crypto.createHash('sha1');
  sha1.update(arr.join(''));
  const result = sha1.digest('hex');

  if (result === signature) {
    ctx.body = ctx.query.echostr;
  } else {
    ctx.body = { code: -1, msg: 'fail' };
  }
});

module.exports = { router };
