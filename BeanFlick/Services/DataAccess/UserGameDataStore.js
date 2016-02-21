var Datastore = require('nedb');


var userGameDataStore = new Datastore({
    filename: __dirname + '../../../App_Data/user_games.db', 
    autoload: true
});


module.exports = userGameDataStore;