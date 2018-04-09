import { cryptoHelper } from '../../src/utils';

test('test sha1 hash encode succeed', () => {
  let text = '12345';
  let result = cryptoHelper.sha1(text);
  expect(result).toBe('8cb2237d0679ca88db6464eac60da96345513964');

  text = '';
  result = cryptoHelper.sha1(text);
  expect(result).toBe('da39a3ee5e6b4b0d3255bfef95601890afd80709');

  text = 'fdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  result = cryptoHelper.sha1(text);
  expect(result).toBe('8eb26fa5c4e100c6e2c830523b0187232f1ebeb8');
});

test('test sha1 failed', () => {
  expect(() => cryptoHelper.sha1(null)).toThrow();
  expect(() => cryptoHelper.sha1(undefined)).toThrow();
  expect(() => cryptoHelper.sha1(1 as any)).toThrow();
  expect(() => cryptoHelper.sha1(/xx/ as any)).toThrow();
});
