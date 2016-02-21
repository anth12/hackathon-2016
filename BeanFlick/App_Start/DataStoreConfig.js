var Game = require('../Domain/Game');
var gameDataStore = require('../Services/DataAccess/GameDataStore');

var dataStoreConfig = function (app) {

    gameDataStore.count({}, function(err, count) {

        if (count > 0)
            return;

        /*
         *  Add the Seed Data
         */
        var boris = new Game('boris-johnson', 'Boris Johnson', '/media/boris-johnson.png');
        boris.PreviewImage = '/media/preview/boris-johnson.jpg';
        boris.MouthLeft = { X: 164, Y: 279 };
        boris.MouthRight = { X: 218, Y: 279 };
        gameDataStore.insert(boris);

        var donald = new Game('donald-trump', 'Donald Trump', '/media/donald-trump.png');
        donald.PreviewImage = '/media/preview/donald-trump.jpg';
        donald.MouthLeft = { X: 168, Y: 225 };
        donald.MouthRight = { X: 238, Y: 225 };
        gameDataStore.insert(donald);

        var david = new Game('david-cameron', 'David Cameron', '/media/david-cameron.png');
        david.PreviewImage = '/media/preview/david-cameron.jpg';
        david.MouthLeft = { X: 179, Y: 334 };
        david.MouthRight = { X: 233, Y: 334 };
        gameDataStore.insert(david);

        var ed = new Game('ed-miliband', 'Ed Miliband', '/media/ed-miliband.png');
        ed.PreviewImage = '/media/preview/ed-miliband.jpg';
        ed.MouthLeft = { X: 176, Y: 335 };
        ed.MouthRight = { X: 249, Y: 333 };
        gameDataStore.insert(ed);
        

    });
}

module.exports = dataStoreConfig;