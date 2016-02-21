var express = require('express');
var router = express.Router();
var highscoreService = require('../../Services/HighscoreService');

/* GET */
router.get('/:gameId?', function (req, res) {
    var gameId = req.params.gameId;

    highscoreService.get(gameId).then(function (count) {
        
        res.send(count);
    });
});


module.exports = router;