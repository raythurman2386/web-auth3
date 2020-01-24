exports.up = async function (knex) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl.string('username').unique().notNullable();
    tbl.string('password').notNullable();
    tbl.string('department').unsigned();
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users')
};
