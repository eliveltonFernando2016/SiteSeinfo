var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cronograma', { title: 'SEINFO17' });
});

module.exports = router;