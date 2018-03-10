var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var config = require('../config');

var toRender = (config.kidsmode) ? 'main_kids' : 'home';
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
//the middlest wares 
router.use((req,resp,next) => {
	var now = new Date();
	var timestamp = now.toLocaleString('en-us', {
		hour: "numeric",
		minute: "numeric",
		hour12: true
	});
	console.log(`you made a ${req.method} call!`);
	console.log(`you made the call at ${timestamp}`);
	// console.log(req);
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
  	title: 'Newflix',
  	message: 'Like Netflix but Worse',
  	mainpage: true,
  	kidsmode: config.kidsmode 
  });
});





module.exports = router;
