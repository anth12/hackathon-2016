var Datastore = require('nedb');


var userGameDataStore = new Datastore({
    filename: __dirname + '../.../App_Data/user_games.db', 
    autoload: true
});

//userGameDataStore.ensureIndex({ fieldName: 'UserId', unique: true });
//userGameDataStore.ensureIndex({ fieldName: 'GameId', unique: true });

module.exports = userGameDataStore;