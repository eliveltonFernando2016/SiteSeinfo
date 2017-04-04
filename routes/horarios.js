var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('horarios', { title: 'SEINFO17' });
});

module.exports = router;