var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');
//TEST TO SEE IF I CONFUSED THIS ROUTE
// router.get('/', function(req, res, next) {
//   res.render('home', { 
//     title: 'Newflix',
//     message: 'Like Netflix but Worse',
//     mainpage: true,
//     kidsmode: config.kidsmode 
//   });
// });

//GET ONE VIDEO
router.get('/watch/:id',(req, res) => {
  console.log(req.params.id);
  console.log('hit an api route with params');

  connect.query(`SELECT movies_title, movies_trailer, movies_storyline FROM tbl_movies WHERE movies_id="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('videos',{
        trailers : result[0]
      });
    }
  });
});

module.exports = router;