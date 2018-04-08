import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';

import config from '../config';
import { util } from './util';

// 确保日志目录存在
util.ensureDirSync(config.logFolder);

const logger: winston.LoggerInstance = new (winston as any).Logger({
  transports: [
    new winston.transports.File({
      name: 'info-file',
      filename: path.join(config.logFolder, 'filelog-info.log'),
      level: 'info'
    }),
    new winston.transports.File({
      name: 'error-file',
      filename: path.join(config.logFolder, 'filelog-error.log'),
      level: 'error'
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(winston.transports.Console);
}

export { logger };
