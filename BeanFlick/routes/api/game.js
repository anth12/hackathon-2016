var express = require('express');
var router = express.Router();
var gameService = require('../../Services/GameService');

/* GET */
router.get('/count', function (req, res) {
    
    gameService.count().then(function (count) {
        
        res.send(count);
    });
});

/* GET */
router.get('/sum/launches/:gameId', function (req, res) {
    var gameId = req.params.gameId;

    gameService.sumLaunches(gameId).then(function (count) {
        
        res.send(count);
    });
});

/* GET */
router.get('/sum/points/:gameId', function (req, res) {
    var gameId = req.params.gameId;
    
    gameService.sumPoints(gameId).then(function (count) {
        
        res.send(count);
    });
});

/* GET */
router.get('/popular', function (req, res) {
    
    gameService.getPopular().then(function (games) {
        
        res.send(games);
    });
});

/* GET */
router.get('/:id', function (req, res) {
    var id = req.params.id;

    gameService.get(id).then(function(user) {
        
        res.send(user);
    });
});

/* GET Start Game */
router.get('/start/:sessionId/:gameId', function (req, res) {
    var sessionId = req.params.sessionId;
    var gameId = req.params.gameId;
    
    gameService.getOrCreateUserGame(sessionId, gameId).then(function (userGame) {
        
        res.send(userGame);
    });
});

module.exports = router;