export enum WxMsgType {
  text,
  image,
  voice,
  video,
  music,
  news
}

export interface WxTextMessage {
  Content: string;
}

export class WxMessageBuilder {
  /**
   * 初始化微信消息构造器
   * @param fromWxId 开发者微信ID
   */
  constructor(private fromWxId: string) {}

  _buildMessage(msgType: WxMsgType, toOpenId: string, extraInfo: any) {
    const baseInfo = {
      ToUserName: toOpenId,
      FromUserName: this.fromWxId,
      CreateTime: Math.floor(Date.now() / 1000),
      MsgType: msgType
    };
  }

  /**
   * 构建文本信息
   * @param toOpenId 要回复的用户OpenId
   * @param extraInfo 文本消息扩展信息
   */
  buildTextMessage(toOpenId, extraInfo: WxTextMessage) {
    return this._buildMessage(WxMsgType.text, toOpenId, extraInfo);
  }

  buildImageMessage() {}

  buildVoiceMessage() {}

  buildVideoMessage() {}

  buildMusicMessage() {}

  buildNewsMessage() {}
}
