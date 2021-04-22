
const { json } = require('express')
const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const bananaRoutes = require('./routes/bananaRoutes')


const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here
server.use('/', bananaRoutes)
server.use('/form', bananaRoutes)
server.use('/story', bananaRoutes)
server.use('/sebsView', bananaRoutes)

module.exports = server