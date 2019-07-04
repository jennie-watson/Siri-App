const config = require('./knexfile').development
const database = require('knex')(config)

const getData = (db = database) => {
  return db('form').select()
}

module.exports = {
  getData
}
