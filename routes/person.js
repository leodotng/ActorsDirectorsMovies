var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get("/", function(request, response, next) {
    knex("person").select().then(function(person){
        response.render("person", {person: person});
    });
});

router.get("/new", function(request, response, next)  {
    response.render("add_person");
});

router.post("/", function(request, response, next) {
    knex("person").insert({
        name: request.body.name,
        role: request.body.role
    }).then(function(){
        response.redirect("/person");
    });
});
module.exports = router;
