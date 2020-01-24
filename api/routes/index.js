const authRouter = require('./auth-router');
const userRouter = require('./user-router');

module.exports = server => {
  server.use('/auth', authRouter);
  server.use('/api', userRouter);
}