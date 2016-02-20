var express = require('express');
var router = express.Router();
var gameService = require('../../Services/GameService');

/* GET */
router.get('/popular', function (req, res) {
    
    gameService.getPopular().then(function (games) {
        
        res.send(games);
    });
});

/* GET */
router.get('/*', function (req, res) {
    var id = req.params[0];

    userService.get(id).then(function(user) {
        
        res.send(user);
    });
});

module.exports = router;