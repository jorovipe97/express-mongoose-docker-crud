var checkIfAuthenticated = require('../middledwares/auth-middledware');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.userInfo);
  res.render('index', { title: 'The Notes App' });
});

module.exports = router;
