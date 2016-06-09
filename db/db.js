'use strict'

import KnexOptions from '../knexfile.js'
import Knex from 'knex'

const knex = Knex(KnexOptions.development)

export default {

  getProducts: () => {
    return knex('products')
  },

  getUser: () => {
    return knex('users')
  }

}