const express = require('express')
const db = require('./db/db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  return db.getData().then(data => res.json(data))
})

module.exports = router
