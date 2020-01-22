const db = require('../db-config');

// find
function find() {
  return db('users').select("id", "username");
}

// findBy
function findBy(filter) {
  return db('users').where(filter).select("id", "username", "password");
}

// add
async function add(user) {
  const [id] = await db('users').insert(user);
  return findBy({ id });
}

// update
function update(user, id) {

}

// remove
function remove(id) {
  return findBy({ id }).del();
}

module.exports = {
  find,
  findBy,
  add,
  update,
  remove
}