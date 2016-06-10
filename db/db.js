'use strict'

import KnexOptions from '../knexfile.js'
import Knex from 'knex'

const knex = Knex(KnexOptions.development)

export default {

  getProducts: () => {
    return knex('products')
      .then((rows) => {
        return { products: rows }
      })
  },

  getUsers: () => {
    return knex('users')
      .then((rows) => {
        return { users: rows }
      })
  },

   getAddOns: () => {
    return knex('addOns')
      .then((rows) => {
        return { addOns: rows }
      })
  }

}