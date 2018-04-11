import * as koa from 'koa';

import { bindSelf, cryptoHelper, xmlHelper } from '../utils';

import config from '../config';

export class WechatBiz {
  @bindSelf
  async processWechatCallback(ctx) {
    const { query } = ctx;
    // 通过签名
    if (this._checkSignature(query, ctx)) {
      ctx.body = query.echostr;
    }
  }

  _checkSignature(query: any = {}, ctx) {
    // 需要将微信Token, timestamp, nonce 转换为数组，进行字典序排序后，通过sha1计算得出签名
    const text = [config.wxToken, query.timestamp, query.nonce].sort().join('');
    const signature = cryptoHelper.sha1(text);
    if (signature === query.signature) {
      return true;
    }
    // 不通过签名，则为非法请求
    ctx.body = '非法请求';
    return false;
  }

  @bindSelf
  async processWechatMessage(ctx: koa.Context) {
    const { query, params } = ctx;
    const { body } = ctx.request as any;
    const resBody = {
      ToUserName: query.openid,
      FromUserName: body.xml.ToUserName,
      CreateTime: Math.floor(Date.now() / 1000),
      MsgType: 'text',
      Content: 'hello'
    };
    const resBodyStr = xmlHelper.stringify(resBody);
    ctx.body = resBodyStr;
  }

  @bindSelf
  async redirectToApp(ctx: koa.Context) {
    const { query, params } = ctx;
    const appId = params.appName;
  }
}

export const wechatBiz = new WechatBiz();
