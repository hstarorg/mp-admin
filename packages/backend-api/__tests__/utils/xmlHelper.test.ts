import { xmlHelper } from '../../src/utils';

test('test parse xml', async () => {
  let xml = `<text>abc</text>`;
  let result = await xmlHelper.parseAsync(xml);
  expect(typeof result).toBe('object');
  expect(result).toHaveProperty('text', 'abc');
});

test('test stringify object to xml', () => {
  let obj = ['xxx', 'good'];
  let result = xmlHelper.stringify(obj);
  expect(typeof result).toBe('string');
  expect(result).toBe(`<xml>
  <0>x</0>
  <1>x</1>
  <2>x</2>
  <0>g</0>
  <1>o</1>
  <2>o</2>
  <3>d</3>
</xml>`);
obj = {key1: 'value1', key2: 'value2'} as any;

result = xmlHelper.stringify(obj);
expect(result).toBe(`<xml>
  <key1>value1</key1>
  <key2>value2</key2>
</xml>`)
});
