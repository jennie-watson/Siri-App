exports.up = function (knex, Promise) {
  return knex.schema.createTable('form', table => {
    table.increments('id').primary()
    table.string('questions')
    table.string('answers'),
    table.string('score')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('form')
}
