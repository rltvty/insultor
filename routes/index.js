var express = require('express');
var router = express.Router();
var words = require('../models/words');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',
      {
        title: 'Insultor',
        insult: words.random_adjective() + ' ' +
                words.random_noun_one() + ' ' +
                words.random_noun_two()
      }
  );
});

module.exports = router;
