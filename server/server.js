const path = require('path')
const express = require('express')

const questionRoutes = require('./questions')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/questions', questionRoutes)

module.exports = server
