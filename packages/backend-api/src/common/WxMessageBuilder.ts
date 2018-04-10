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
  constructor() {}
  _buildMessage(msgType: WxMsgType, toOpenId: string, extraInfo: any) {
    const baseInfo = {
      ToUserName: toOpenId,
      FromUserName: '',
      CreateTime: Math.floor(Date.now() / 1000),
      MsgType: msgType
    };
  }

  buildTextMessage(toOpenId, extraInfo: WxTextMessage) {
    return this._buildMessage(WxMsgType.text, toOpenId, extraInfo);
  }

  buildImageMessage() {}

  buildVoiceMessage() {}

  buildVideoMessage() {}

  buildMusicMessage() {}

  buildNewsMessage() {}
}
