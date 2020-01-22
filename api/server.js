const express = require('express');
const middleware = require('./middleware');
const router = require('./routes');

const server = express();
middleware(server);
router(server);

server.use('/', (req, res) => {
  res.json({ message: "Server working." })
});

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong, I apologize."
  })
})

module.exports = server;