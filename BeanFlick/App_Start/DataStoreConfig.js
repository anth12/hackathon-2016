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
        boris.MouthLeft = { X: 153, Y: 254 };
        boris.MouthRight = { X: 209, Y: 254 };
        gameDataStore.insert(boris);
        
        var donald = new Game('donald-trump', 'Donald Trump', '/media/donald-trump.png');
        donald.PreviewImage = '/media/preview/donald-trump.jpg';
        donald.MouthLeft = { X: 166, Y: 203 };
        donald.MouthRight = { X: 213, Y: 203 };
        gameDataStore.insert(donald);
        
        var david = new Game('david-cameron', 'David Cameron', '/media/david-cameron.png');
        david.PreviewImage = '/media/preview/david-cameron.jpg';
        david.MouthLeft = { X: 164, Y: 310 };
        david.MouthRight = { X: 220, Y: 310 };
        gameDataStore.insert(david);
        
        var ed = new Game('ed-miliband', 'Ed Miliband', '/media/ed-miliband.png');
        ed.PreviewImage = '/media/preview/ed-miliband.jpg';
        ed.MouthLeft = { X: 164, Y: 313 };
        ed.MouthRight = { X: 231, Y: 313 };
        gameDataStore.insert(ed);
        

    });
}

module.exports = dataStoreConfig;