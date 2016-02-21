var Datastore = require('nedb');
var path = require('path');

var userGameDataStore = new Datastore({
    filename: path.join(__dirname + '../../../App_Data/user_games.db'), 
    autoload: true
});


module.exports = userGameDataStore;