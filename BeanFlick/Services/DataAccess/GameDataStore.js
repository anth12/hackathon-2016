var Datastore = require('nedb');
var path = required('path');

var gameDataStore = new Datastore({
    filename: path.join(__dirname + '../../../App_Data/games.db'), 
    autoload: true
});

module.exports = gameDataStore;