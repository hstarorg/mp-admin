import * as Router from 'koa-router';

import { wechatBiz } from '../bizs';
import { xmlBodyParser } from '../middlewares';

const router = new Router({
  prefix: ``
});

/**
 * 微信接口配置，验证。
 */
router
  // 微信接口配置验证
  .get('/', wechatBiz.processWechatCallback)
  // 处理微信消息
  .post('/', xmlBodyParser(), wechatBiz.processWechatMessage);

module.exports = { router };
