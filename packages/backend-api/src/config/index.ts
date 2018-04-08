import * as path from 'path';
import localConfig from './local-config';

export default {
  port: 9000,
  routesPath: path.join(__dirname, '..', 'routes'),
  wxToken: 'hello,wx',
  ...localConfig
};
