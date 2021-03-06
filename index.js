'use strict'

import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import KnexOptions from './knexfile.js'
import Knex from 'knex'
import session from 'express-session'
import KnexSessionStore from 'connect-session-knex'
import passport from 'passport'
import FaceBookStrategy from 'passport-facebook'
import DB from './db/db'

dotenv.config()
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const knex = Knex(KnexOptions[process.env.NODE_ENV])
const app = express()
const server = http.createServer(app)
const db = DB(knex)
const sessionStore = KnexSessionStore(session)
const store = new sessionStore({ knex: knex })

app.use(express.static(__dirname + '/public'))

app.use(session({
  secret: 'Pony Galaxy',
  saveUninitialized: true,
  resave: true,
  store: store
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

passport.use(new FaceBookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/fb/cb'
  }, (accessToken, refreshToken, profile, callback) => {
    console.log('FaceBookStrategy callback', profile)
    return callback(null, profile)
  })
)

passport.serializeUser((user, callback) => {
  console.log('serializeUser', user)
  callback(null, { facebookId: user.id, name: user.displayName })
})

passport.deserializeUser((obj, callback) => {
  console.log('deserializeUser', obj)
  callback(null, obj)
})

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  console.log('GET /')
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/user', (req, res) => {
  console.log('GET /api/user')
  res.json((req.session.passport && req.session.passport.user) ? {
    user: {
      name: req.session.passport.user.name
    },
    cart: req.session.cart
  } : {})
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

app.post('/api/update-cart', (req, res) => {
  console.log('POST /api/update-cart')
  console.log(req.body)
  req.session.cart = req.body.cart
  res.json( {} )
})

app.get('/auth/fb',
  passport.authenticate('facebook'))

app.get('/auth/fb/cb',
  passport.authenticate('facebook', { failureRedirect: '/auth/fb' }),
  (req, res) => {
    res.redirect('/')
  })

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
