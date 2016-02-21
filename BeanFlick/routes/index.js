var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:game?', function (req, res) {
    res.render('index', { title: 'Bean Flick' });
});

module.exports = router;