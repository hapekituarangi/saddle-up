
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('products').insert({
      name: 'Optimus Prime',
      price: 80000.00,
      url: 'http://tfwiki.net/mediawiki/images2/thumb/3/37/Optimusg1.jpg/350px-Optimusg1.jpg',
      age: '6 million years',
      breed: 'Truck',
      description: 'Optimus Prime is the leader of all the ponies. He is wise and kind, but ruthless when he needs to be. He is great with children.'
    }),
    knex('products').insert({
      name: 'Megatron',
      price: 9000.00,
      url: 'http://img11.deviantart.net/a55f/i/2011/025/b/5/megatron_g1_by_alexdobson-d380thy.jpg',
      age: 'Millions and millions of years',
      breed: 'Evil',
      description: 'Megatron can be a bit temperatmental so is only recommended for experienced riders. In saying that, if you give him a good scratch then he will destroy the world for you.'
    }),
    knex('products').insert({
      name: 'Bumblebee',
      price: 10000.00,
      url: 'http://vignette2.wikia.nocookie.net/transformers/im ages/b/bf/Wfc-bumblebee-1.jpg/revision/latest?cb=20111031135557',
      age: 'Young at heart' ,
      breed: 'Beetle' ,
      description: 'Bumblebee has a delightful personality and can always be relied upon to go the extra mile for you. Which is really good when travelling by pony.'
    }),
    knex('products').insert({
      name: 'Starscream',
      price: 4000.00,
      url: 'http://static.zerochan.net/Starscream.full.636078.jpg',
      age: '30 years',
      breed: 'Fighter Jet',
      description: 'Starscream is a real handful. You will need to be extrememly firm with him if you are to control him. Also thinks he can fly, which is mildly terrifying.'
    }),
    knex('products').insert({
      name: 'Rainbow Dash',
      price: 16000.00,
      url: 'http://mylittlepony.hasbro.com/images/spring2016/ponies/char_rainbowdash.png',
      age: '4 years',
      breed: 'Pegasus',
      description: 'Rainbow Dash is always ready for an adventure with her pony friends. Rain or shine, she is a loyal dependable friend.'
    })
  );
};
