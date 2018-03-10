var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

//GET ONE VIDEO
router.get('/:id',(req, res) => {
  console.log(req.params.id);
  console.log('hit an api route with params');

  connect.query(`SELECT movies_title, movies_trailer, movies_storyline FROM tbl_movies WHERE movies_id="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('videos',{
        trailers : result
      });
    }
  });
});

module.exports = router;