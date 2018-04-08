import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';

const logFolder = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logFolder)) {
  fs.mkdirSync(logFolder);
}

const logger: winston.LoggerInstance = new (winston as any).Logger({
  transports: [
    new winston.transports.File({
      name: 'info-file',
      filename: path.join(logFolder, 'filelog-info.log'),
      level: 'info'
    }),
    new winston.transports.File({
      name: 'error-file',
      filename: path.join(logFolder, 'filelog-error.log'),
      level: 'error'
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(winston.transports.Console);
}

export { logger };
