
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('products', function(table){
    table.increments('id')
    table.string('name')
    table.float('price')
    table.string('url')
    table.string('age')
    table.string('breed')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products')
};
