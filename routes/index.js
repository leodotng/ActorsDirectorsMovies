var express = require('express');
var router = express.Router();
// var db = require('../db/knex')
/* GET home page. */
router.get('/', function(req, res, next) {
//     // return db('movie').then(data => res.json(data))
//     // return db.select('title', 'name').from('movie').innerJoin('movie_person', 'movie.id', 'movie_person.movie_id');
//     // .then(function(movieData){
//     //     console.log(movieData)
     res.render('index');


});

module.exports = router;
