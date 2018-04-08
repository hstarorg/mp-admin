import * as fastKoa from 'fast-koa';
import * as path from 'path';

import config from './config';

fastKoa.initApp({ routesPath: config.routesPath, enableLogger: true });

fastKoa
  .listen(config.port)
  .then(server => {
    const addr = server.address();
    console.log(`Server started. listen ${addr.port}`);
  })
  .catch(console.error);
