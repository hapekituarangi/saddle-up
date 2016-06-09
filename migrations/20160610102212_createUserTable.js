
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments('id')
    table.string('name')
    table.string('facebookId')
    table.string('email')
    table.string('street')
    table.string('suburb')
    table.string('city')
    table.string('country')
    table.string('postCode')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
