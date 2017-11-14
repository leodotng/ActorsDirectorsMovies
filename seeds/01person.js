exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {id: 1, name: 'Tom Hanks', role: 'Actor'},
        {id: 2, name: 'Danny Glover', role: 'Actor'},
        {id: 3, name: 'Martin Scorsese', role: 'Director'},
        {id: 4, name: 'James Wan', role: 'Director'}
      ]);
    });
};
