var Datastore = require('nedb');
var path = require('path');

var gameDataStore = new Datastore({
    filename: path.join(__dirname + '../../../App_Data/games.db'), 
    autoload: true
});

//gameDataStore.ensureIndex({ fieldName: 'UrlCode', unique: true });

module.exports = gameDataStore;