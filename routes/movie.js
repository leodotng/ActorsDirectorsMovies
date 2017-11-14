var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// router.get('/', function(req, res, next) {
//     // return knex('movie').then(function(movie){
//         res.render('movie');
//     // });
// });

router.get("/", function(request, response, next) {
    knex("movie").select().then(function(movie){
        response.render("movie", {movie: movie});
    });
});

router.get("/new", function(request, response, next)  {
    response.render("add_movie");
});

router.post("/", function(request, response, next) {
    knex("movie").insert({
        title: request.body.title,
        actor_id: request.body.actor_id,
        director_id: request.body.director_id
    }).then(function(){
        response.redirect("/movie");
    });
});

module.exports = router;
