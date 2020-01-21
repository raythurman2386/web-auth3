const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/', (req, res) => {
  res.json({ message: "Server working." })
});

module.exports = server;