exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {title: 'Saving Private Ryan', actor_id: '1', director_id: '1'},
        {title: 'The Wolf Of Wall Street', actor_id: '2', director_id: '3'},
        {title: 'Shutter Island', actor_id: '3', director_id: '3'},
        {title: 'The Departed', actor_id: '2', director_id: '3'},
        {title: 'Lethal Weapon 2', actor_id: '2', director_id: '2'}
      ]);
    });
};
