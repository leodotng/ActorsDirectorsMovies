// const knex = ('knex')
const environment = 'development'
const config = require('../knexfile.js');
const db = require('knex')(config[environment])



// JOIN STATEMENT

// JOIN TABLE / JUNCTION TABLES
// many to many relationship tables 

module.exports = db
