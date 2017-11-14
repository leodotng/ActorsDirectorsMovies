exports.up = function(knex, Promise) {
return knex.schema.createTable('person_movie', table => {
    table.increments();
    table.integer('person_id').references('person.id')
    table.integer('movie_id').references('movie.id')
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person_movie');
};
