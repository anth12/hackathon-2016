var express = require('express');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var Game = require('../../Domain/Game');
var gameDataStore = require('../../Services/DataAccess/GameDataStore');

var upload = multer({
    dest: path.join(__dirname + "../../../public/media/public/"),
    limits: {
        fileSize: 2500000 //2.5mb
    }
});

function createUrlCode(length) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var result = '';
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/* POST Create Game */
router.post('/create', upload.array('Image'), function (req, res) {

    var image = '/media/public/' + req.files[0].filename;

    var game = new Game(createUrlCode(5), req.body.Name, image);
    
    game.MouthLeft = {
        X: req.body['MouthLeft.X'],
        Y: req.body['MouthLeft.Y']
    }
    game.MouthRight = {
        X: req.body['MouthRight.X'],
        Y: req.body['MouthRight.Y']
    }
    
    if (parseFloat(game.MouthLeft.X) > parseFloat(game.MouthRight.X)) {
        //Swap around
        var left = JSON.parse(JSON.stringify(game.MouthLeft));
        game.MouthLeft = JSON.parse(JSON.stringify(game.MouthRight));
        game.MouthRight = left;
    }
    game.UserDefined = true;

    gameDataStore.insert(game, function(err, savedGame) {

        res.redirect('/' + game.UrlCode);
    });

});

router.use(function(err, req, res, next) {
    if (err.code === 'LIMIT_FILE_SIZE') {

        return res.redirect('/?error=fileSize');
    }
});

module.exports = router;