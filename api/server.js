const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/api', userRouter);

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