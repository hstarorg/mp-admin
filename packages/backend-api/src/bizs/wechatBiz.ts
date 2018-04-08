import config from '../config';
import { cryptoHelper } from '../utils';

export class WechatBiz {
  async processWechatCallback(ctx) {
    const { query } = ctx;
    console.log(query);
    // 需要将微信Token, timestamp, nonce 转换为数组，进行字典序排序后，通过sha1计算得出签名
    const text = [config.wxToken, query.timestamp, query.nonce].sort().join('');
    const signature = cryptoHelper.sha1(text);
    // 通过签名
    if (signature === query.signature) {
      ctx.body = query.echostr;
    } else {
      // 不通过签名
      ctx.body = { code: -1, msg: 'fail' };
    }
  }
}

export const wechatBiz = new WechatBiz();
