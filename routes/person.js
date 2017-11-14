var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get("/", function(request, response, next) {
    knex("person").select().then(function(person){
        response.render("person", {person: person});
    });
});
module.exports = router;
