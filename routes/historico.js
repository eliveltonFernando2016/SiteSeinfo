var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('historico', { title: 'SEINFO17' });
});

module.exports = router;