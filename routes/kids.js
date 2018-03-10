var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

//KIDS HOME PAGE
router.get('/', function(req, res, next) {
  connect.query("SELECT tbl_movies.movies_title, tbl_movies.movies_id, tbl_movies.movies_cover FROM tbl_movies, tbl_genre, tbl_mov_genre WHERE tbl_mov_genre.movies_id = tbl_movies.movies_id AND tbl_mov_genre.genre_id = tbl_genre.genre_id AND tbl_genre.genre_name = 'family'", (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('kids', {
        layout:'kids',
        title: 'Newflix ...kids!',
        message: 'Rainbows and Butterflies and Lollipops',
        movies: result,
      });
    }
  })
});

//GET ONE KIDS
router.get('/:id',(req, res) => {
  console.log(req.params.id);
  console.log('hit an api route with params');

  connect.query(`SELECT movies_title, movies_trailer, movies_storyline FROM tbl_movies WHERE movies_id="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      
      res.render('videos',{
        trailers : result
      });
    }
  });
});

module.exports = router;