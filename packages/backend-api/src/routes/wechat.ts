import * as Router from 'koa-router';
import { wechatBiz } from '../bizs';
import config from '../config';

const router = new Router({
  prefix: ``
});

/**
 * 微信接口配置，验证。
 */
router.get('/', wechatBiz.processWechatCallback);

module.exports = { router };
