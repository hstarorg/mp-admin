import axios from 'axios';
export type AccessTokenResult = {
  access_token: string;
  expires_in: number;
};

export interface TokenStore {
  setToken: (tokenResult: AccessTokenResult, aheadSeconds?: number) => void;
  getToken: () => string;
}

class MemoryTokenStore implements TokenStore {
  accessToken: { token: string; expires: number } = null;

  setToken(tokenResult: AccessTokenResult, aheadSeconds: number = 200): void {
    // 过期时间
    const expires: number = (tokenResult.expires_in - aheadSeconds) * 1000 + Date.now();
    this.accessToken = { token: tokenResult.access_token, expires };
  }
  getToken(): string {
    if (this.accessToken && this.accessToken.expires <= Date.now()) {
      return this.accessToken.token;
    }
    return null;
  }
}

export type AccessTokenManagerOptions = {
  appID: string;
  appSecret: string;
  wxHost?: string;
  aheadSeconds?: number;
};

const accessTokenManagerDefaults = {
  wxHost: 'https://api.weixin.qq.com/cgi-bin',
  aheadSeconds: 200
};

export class AccessTokenManager {
  constructor(private options: AccessTokenManagerOptions, private tokenStore: TokenStore = new MemoryTokenStore()) {
    this.options = Object.assign({}, accessTokenManagerDefaults, options);
  }

  /**
   * 获取AccessToken
   */
  async getAccessToken() {
    let token = this.tokenStore.getToken();
    // 如果有效，直接用
    if (token) {
      return token;
    }
    // 否则，先获取一次，再用
    const tokenResult = await this._getWxAccessToken();
    this.tokenStore.setToken(tokenResult, this.options.aheadSeconds);
    return this.tokenStore.getToken();
  }

  /**
   * 根据appID和appSecret获取accessToken
   */
  async _getWxAccessToken(): Promise<AccessTokenResult> {
    const { appID, appSecret, wxHost } = this.options;
    const { data } = await axios.get(`${wxHost}/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`);
    return data as AccessTokenResult;
  }
}
