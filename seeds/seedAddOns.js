
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('addOns').del(),

    // Inserts seed entries
    knex('addOns').insert({
      type: 'Chocolate',
      price: 5.00,
      url: 'https://www.platterschocolates.com/media/catalog/product/cache/1/image/800x920/9df78eab33525d08d6e5fb8d27136e95/e/a/easter-pony-milk-chocolate.png',
      rentOrBuy: 'buy'
    }),
    knex('addOns').insert({
      type: 'Champagne',
      price: 90.00,
      url: 'http://www.pd4pic.com/images/-champagne-sparkling-wine-bottle-wine-feast-festive.png',
      rentOrBuy: 'buy'
    }),
    knex('addOns').insert({
      type: 'Reins',
      price: 50.00,
      url: 'http://www.waldhausen.com/media/catalog/product/cache/3/small_image/280x320/a4e40ebdc3e371adff845072e1c73f37/501199/Shop/Artikel/501199_0.png',
      rentOrBuy: 'rent'
    }),
    knex('addOns').insert({
      type: 'Hay',
      price: 15.00,
      url: 'http://www.clipartlord.com/wp-content/uploads/2016/04/haystack3.png',
      rentOrBuy: 'rent'
    })
  );
};
