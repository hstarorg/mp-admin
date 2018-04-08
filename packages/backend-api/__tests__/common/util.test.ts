import { util } from '../../src/common';

test('test get access token', async () => {
  const accessToken = await util.getAccessToken();
  expect(accessToken).toBeTruthy();
});
