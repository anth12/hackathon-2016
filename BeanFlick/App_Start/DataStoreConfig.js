var Game = require('../Domain/Game');
var gameDataStore = require('../Services/DataAccess/GameDataStore');

var dataStoreConfig = function (app) {

    gameDataStore.count({}, function(err, count) {

        if (count > 0)
            return;

        /*
         *  Add the Seed Data
         */
        var boris = new Game('boris-johnson', 'Boris Johnson', '/media/boris-johnson.jpg');
        boris.PreviewImage = '/media/preview/boris-johnson.jpg';
        boris.MouthLeft = { X: 356, Y: 589 };
        boris.MouthRight = { X: 507, Y: 579 };
        gameDataStore.insert(boris);
        
        var donald = new Game('donald-trump', 'Donald Trump', '/media/donald-trump.jpg');
        donald.PreviewImage = '/media/preview/donald-trump.jpg';
        boris.MouthLeft = { X: 570, Y: 257 };
        boris.MouthRight = { X: 544, Y: 411 };
        gameDataStore.insert(donald);
        
        var david = new Game('david-cameron', 'David Cameron', '/media/david-cameron.jpg');
        david.PreviewImage = '/media/preview/david-cameron.jpg';
        boris.MouthLeft = { X: 337, Y: 665 };
        boris.MouthRight = { X: 670, Y: 470 };
        gameDataStore.insert(david);
        
        var ed = new Game('ed-miliband', 'Ed Miliband', '/media/ed-miliband.jpg');
        ed.PreviewImage = '/media/preview/ed-miliband.jpg';
        boris.MouthLeft = { X: 350, Y: 669 };
        boris.MouthRight = { X: 495, Y: 669 };
        gameDataStore.insert(ed);
        

    });
}

module.exports = dataStoreConfig;