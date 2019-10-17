const winston = require('winston');

const { IS_DEV } = require('./consts');

const logger = winston.createLogger({
  format: winston.format.simple(),
  level: !IS_DEV ? 'info' : 'debug',
  transports: [new winston.transports.Console()],
});

module.exports = logger;
