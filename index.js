'use strict'

import express from 'express'
import http from 'http'
import passport from 'passport'
import FaceBookStrategy from 'passport-facebook'
import db from './db/db'

const app = express()
const server = http.createServer(app)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  console.log('GET /')
  res.sendFile(__dirname + '/public/index.html')
})

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
