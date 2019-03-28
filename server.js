const logger = require('logger');
const app = require('app.js');
const config = require('config');
const https = require('https');
const fs = require('fs');

const logPath = 'server.js';

https.createServer({
  key: fs.readFileSync('keys/server.key'), // eslint-disable-line
  cert: fs.readFileSync('keys/server.cert') // eslint-disable-line
}, app).listen(config.node.port, () => {
  logger.trace(`SYA server listening on port: ${config.node.port}`, logPath);
});
