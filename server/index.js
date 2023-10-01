const http = require('http');
const express = require('express');
const config = require('../config');
const socket = require('./lib/socket');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use('/', express.static(`${__dirname}/../client/dist`));

server.listen(config.PORT, () => {
  console.log('Server is listening at :', config.PORT);
});

socket(server);
