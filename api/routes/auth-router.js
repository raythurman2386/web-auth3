const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('../../data/helpers/users-model');
const generateToken = require('../token/generateToken');

authRouter
  // POST to /auth/register
  .post('/register', async (req, res, next) => {
    try {
      let user = req.body;
      const hashPw = await bcrypt.hash(user.password, 12);
      user.password = hashPw;

      const newUser = await Users.add(user);
      return res.status(201).json(newUser);
    } catch (error) {
      next(error)
    }
  })
  // POST to /auth/login
  .post('/login', async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await Users.findBy({ username }).first();
      const verifyPw = await bcrypt.compare(password, user.password);

      if (user && verifyPw) {
        const token = await generateToken(user);

        return res.status(200).json({
          message: `Welcome, ${user.username}`,
          token: token
        });

      } else {
        return res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch (error) {
      next(error)
    }
  })

module.exports = authRouter;