
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('addOns', function(table){
    table.increments('id')
    table.string('type')
    table.float('price')
    table.string('url')
    table.string('rentOrBuy')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('addOns')
};
