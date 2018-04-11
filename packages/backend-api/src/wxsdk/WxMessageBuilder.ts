import { WxMsgType } from './WxMsgType';

import { xmlHelper } from '../utils';

export interface WxTextMessage {
  Content: string; // 回复的消息内容（换行：在content中能够换行，微信客户端就支持换行显示）
}

export interface WxImageMessage {
  MediaId: string; // 通过素材管理中的接口上传多媒体文件，得到的id
}

export interface WxVoiceMessage {
  MediaId: string; // 通过素材管理中的接口上传多媒体文件，得到的id
}

export interface WxVideoMessage {
  MediaId: string; // 通过素材管理中的接口上传多媒体文件，得到的id
  Title?: string; // 视频消息的标题
  Description?: string; // 视频消息的描述
}

export interface WxMusicMessage {
  Title?: string; // 音乐标题
  Description?: string; //音乐描述
  MusicURL?: string; // 音乐链接
  HQMusicUrl?: string; // 高质量音乐链接，WIFI环境优先使用该链接播放音乐
  ThumbMediaId: string; // 缩略图的媒体id，通过素材管理中的接口上传多媒体文件，得到的id
}

export interface WxNewsMessage {
  ArticleCount: number; //图文消息个数，限制为8条以内
  Articles: number; // 多条图文消息信息，默认第一个item为大图,注意，如果图文数超过8，则将会无响应
  Title: string; // 图文消息标题
  Description: string; // 图文消息描述
  PicUrl: string; // 图片链接，支持JPG、PNG格式，较好的效果为大图360*200，小图200*200
  Url: string; // 点击图文消息跳转链接
}

export class WxMessageBuilder {
  /**
   * 初始化微信消息构造器
   * @param fromWxId 开发者微信ID
   */
  constructor(private fromWxId: string, private toOpenId: string) {}

  _buildMessage(msgType: WxMsgType, extraInfo: any) {
    const baseInfo = {
      ToUserName: this.toOpenId,
      FromUserName: this.fromWxId,
      CreateTime: Math.floor(Date.now() / 1000),
      MsgType: msgType
    };

    return xmlHelper.stringify({ ...extraInfo, ...baseInfo });
  }

  /**
   * 构建文本信息
   * @param extraInfo 文本消息扩展信息
   */
  buildTextMessage(extraInfo: WxTextMessage) {
    return this._buildMessage(WxMsgType.text, extraInfo);
  }

  /**
   * 构建图片信息
   * @param extraInfo 图片消息扩展信息
   */
  buildImageMessage(extraInfo: WxImageMessage) {
    return this._buildMessage(WxMsgType.image, extraInfo);
  }

  buildVoiceMessage(extraInfo: WxVoiceMessage) {
    return this._buildMessage(WxMsgType.voice, extraInfo);
  }

  buildVideoMessage(extraInfo: WxVideoMessage) {
    return this._buildMessage(WxMsgType.video, extraInfo);
  }

  buildMusicMessage(extraInfo: WxMusicMessage) {
    return this._buildMessage(WxMsgType.music, extraInfo);
  }

  buildNewsMessage(extraInfo: WxNewsMessage) {
    return this._buildMessage(WxMsgType.news, extraInfo);
  }
}
