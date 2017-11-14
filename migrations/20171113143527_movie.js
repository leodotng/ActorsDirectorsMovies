exports.up = function(knex, Promise) {
    return knex.schema.createTable('movie', (table) => {
        table.increments();
        table.string('title')
        table.integer('actor_id').references('person.id')
        table.integer('director_id').references('person.id')
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie');
};
