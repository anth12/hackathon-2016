
var gameDataStore = require('./DataAccess/GameDataStore');
var userDataStore = require('./DataAccess/UserDataStore');
var userGameDataStore = require('./DataAccess/UserGameDataStore');

var userService = require('./UserService');


var highscoreService = {
    
    get: function(gameId) {
        
        return new Promise(function (resolve, reject) {

            var query = gameId != null ? { GameId: gameId } : {};
            var highscores = [];
            
            userGameDataStore.find(query).sort({ HighestPoints: -1, TotalLaunches: -1 })
                                                    .limit(3).exec(function (err, userGames) {

                var usersQuery = { '$or': [] };
                userGames.forEach(function (userGame) {
                    usersQuery['$or'].push({ UserId: userGame.UserId });
                });

                userDataStore.find(usersQuery, function(err, users) {

                    userGames.forEach(function (userGame) {

                        var user = users.filter(function(usr) {
                            return userGame.UserId === usr.UserId;
                        })[0];

                        highscores.push({
                            user: user,
                            userGame: userGame
                        });
                    });
                    
                    resolve(highscores);
                });
                

            });

        });
    }
}

module.exports = highscoreService;