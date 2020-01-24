const userRouter = require('express').Router()
const Users = require('../../data/helpers/users-model');
const restricted = require('../middleware/restricted');
// GET to /api/users
userRouter
  .get('/users', restricted(), async (req, res, next) => {
    try {
      const users = await Users.find();
      return res.status(200).json(users);
    } catch (error) {
      next(error)
    }
  })

module.exports = userRouter;