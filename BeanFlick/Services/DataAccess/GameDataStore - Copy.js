var Datastore = require('nedb');


var gameDataStore = new Datastore({
    filename: __dirname + '../.../App_Data/games.db', 
    autoload: true
});

module.exports = gameDataStore;