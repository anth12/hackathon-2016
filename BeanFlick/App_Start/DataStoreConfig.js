var Game = require('../Domain/Game');
var gameDataStore = require('../Services/DataAccess/GameDataStore');

var dataStoreConfig = function (app) {

    gameDataStore.count({}, function(err, count) {

        if (count > 0)
            return;

        /*
         *  Add the Seed Data
         */
        var people = [
            'Boris Johnson', 'Donald Trump', 'Barack Obama', 'David Cameron' ];
        
        people.forEach(function (person) {
            var nameUrl = person.replace(/\s/, '-').toLowerCase();
            var game = new Game(nameUrl, person, '/media/' + nameUrl + '.jpg');
            game.PreviewImage = '/media/Preview/' + nameUrl + '.jpg';
            gameDataStore.insert(game);
        });


    });
}

module.exports = dataStoreConfig;