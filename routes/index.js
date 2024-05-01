var express = require('express');
const mongoose = require("mongoose");
var router = express.Router();
const User = require("../Models/User")
const controller = require("../Controllers/userscon")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register' , controller.UserRegister)

module.exports = router;
