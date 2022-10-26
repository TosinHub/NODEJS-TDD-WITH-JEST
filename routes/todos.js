var express = require('express');
var router = express.Router();
var createError = require('http-errors');


const todos = [{
  id: 1,
  name: "Amen",
  completed: false
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(todos)
});

router.get('/:id', function(req, res, next) {
 

});

module.exports = router;
