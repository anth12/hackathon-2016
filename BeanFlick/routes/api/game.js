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


/* POST Start Game */
router.post('/start/:sessionId/:gameId', function (req, res) {
    var sessionId = req.params.sessionId;
    var gameId = req.params.gameId;
    
    gameService.getOrCreateUserGame(sessionId, gameId).then(function (userGame) {

        gameService.get(gameId).then(function (game) {
       
            res.send({
                game: game,
                userGame: userGame
            });

        });
    });

});

module.exports = router;