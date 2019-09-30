
'use strict';
const server = require('./server')();
const config = require('./config');
const db = require('./config/db');
server.create(config, db);
server.start();