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
        boris.MouthLeft = { "X": "135", "Y": "457" };
        boris.MouthRight = { "X": "252", "Y": "458" };
        gameDataStore.insert(boris);

        var donald = new Game('donald-trump', 'Donald Trump', '/media/donald-trump.png');
        donald.PreviewImage = '/media/preview/donald-trump.jpg';
        donald.MouthLeft = { "X": "131", "Y": "389" };
        donald.MouthRight = { "X": "266", "Y": "379" };
        gameDataStore.insert(donald);

        var david = new Game('david-cameron', 'David Cameron', '/media/david-cameron.png');
        david.PreviewImage = '/media/preview/david-cameron.jpg';
        david.MouthLeft = { "X": "153", "Y": "504" };
        david.MouthRight = { "X": "276", "Y": "511" };
        gameDataStore.insert(david);

        var ed = new Game('ed-miliband', 'Ed Miliband', '/media/ed-miliband.png');
        ed.PreviewImage = '/media/preview/ed-miliband.jpg';
        ed.MouthLeft = { "X": "144", "Y": "488" };
        ed.MouthRight = { "X": "277", "Y": "488" };
        gameDataStore.insert(ed);
        

    });
}

module.exports = dataStoreConfig;