import { AccessTokenManager } from './AccessTokenManager';
import config from '../config';

export class Util {
  constructor(
    private accessTokenManager = new AccessTokenManager({ appID: config.wxAppID, appSecret: config.wxAppSecret })
  ) {}

  /**
   * 获取AccessToken
   */
  async getAccessToken() {
    return await this.accessTokenManager.getAccessToken();
  }
}

export const util = new Util();
