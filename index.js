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

app.get('/api/products', (req, res) => {
  console.log('GET /api/products')
  db.getProducts()
    .then((products) => {
      res.json(products)
    })
})

app.get('/api/addons', (req, res) => {
  console.log('GET /api/addons')
  db.getAddOns()
    .then((addOns) => {
      res.json(addOns)
    })
})


server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
