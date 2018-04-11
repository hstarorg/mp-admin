import * as koa from 'koa';
import { bindSelf, cryptoHelper, xmlHelper } from '../utils';
export class MessageBuilder {
  responseCommon(ctx: koa.Context): any {
    const { query, request } = ctx;
    const { body } = request as any;
    return {
      ToUserName: query.openid,
      FromUserName: body.xml.ToUserName,
      CreateTime: Math.floor(Date.now() / 1000)
    };
  }

  responseText(content: String, ctx: koa.Context) {
    const { query, request } = ctx;
    const { body } = request as any;
    const resBody = {
      ...this.responseCommon(ctx),
      MsgType: 'text',
      Content: content
    };
    this.responseSend(ctx, resBody);
  }

  responseSend(ctx, resBody) {
    const resBodyStr = xmlHelper.stringify(resBody);
    ctx.body = resBodyStr;
  }
}
