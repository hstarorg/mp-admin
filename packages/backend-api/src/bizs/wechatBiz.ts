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
    // 处理消息
    const MsgType = ctx.body.xml.MsgType;
    this.msgTypeCb(MsgType);
    // 返回消息
  }

  msgTypeCb(type) {}
}

export const wechatBiz = new WechatBiz();
