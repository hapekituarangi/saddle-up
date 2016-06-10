'use strict'

export default (knex) => {

  return {

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

}