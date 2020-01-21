const db = require('../db-config');

// find
function find() {
  return db('users').select();
}

// findBy
function findBy(filter) {
  return db('users').where(filter).first();
}

// add
function add(user) {

}

// update
function update(user, id) {

}

// remove
function remove(id) {

}

module.exports = {
  find,
  findBy,
  add,
  update,
  remove
}