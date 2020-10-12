const express = require('express')
const app = express()
const posts = require('./routes/postsRoutes')

app.use(express.json())
app.use('/', posts)

module.exports = app