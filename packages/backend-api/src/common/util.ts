import * as fse from 'fs-extra';

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

  /**
   * 确保目录存在（没有则创建，同步方法）
   * @param path 要确保存在的目录
   */
  ensureDirSync(path: string) {
    fse.ensureDirSync(path);
  }
}

export const util = new Util();
