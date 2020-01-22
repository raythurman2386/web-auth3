const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = server => {
  server.use(cors());
  server.use(helmet());
  server.use(express.json());
}