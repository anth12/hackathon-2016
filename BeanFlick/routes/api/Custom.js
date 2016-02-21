var express = require('express');
var fs = require('fs');
var router = express.Router();
var Game = require('../../Domain/Game');
var gameDataStore = require('../../Services/DataAccess/GameDataStore');


/* POST Create Game */
router.post('/create', function (req, res) {

    var sessionId = req.params.sessionId;
    
    fs.readFile(req.files.Image.path, function (err, data) {
        
        var newPath = __dirname + "/media/public/";
        fs.writeFile(newPath, data, function (err) {
            res.redirect("back");
        });
    });

    var game = new Game('', );
    game.UserDefined = true;

    gameDataStore.insert(game, function(err, savedGame) {

        res.send(savedGame);
    });

});

module.exports = router;