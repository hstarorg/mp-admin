import * as crypto from 'crypto';

export class CryptoHelper {
  /**
   * 将字符串进行sha1编码
   * @param text 要编码的字符串
   */
  sha1(text: string): string {
    const sha1 = crypto.createHash('sha1');
    sha1.update(text);
    return sha1.digest('hex');
  }
}

export const cryptoHelper = new CryptoHelper();
