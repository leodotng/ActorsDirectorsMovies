exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', (table) => {
      table.increments();
      table.string('name');
      table.string('role');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person');
};
