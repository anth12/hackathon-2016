var guid = require('node-uuid');

var Game = require('../Domain/Game');
var UserGame = require('../Domain/UserGame');

var gameDataStore = require('./DataAccess/GameDataStore');
var userGameDataStore = require('./DataAccess/UserGameDataStore');

var userService = require('./UserService');

var userGameService = {
    
    update: function (userGameId, action) {
        
        return new Promise(function (resolve, reject) {
            
            userGameDataStore.find({ _id: userGameId }, function (err, docs) {

                if (docs.length < 1)
                    return reject('User Game not found');

                var userGame = docs[0];

                var newValues = {};
                
                newValues.TotalLaunches = userGame.TotalLaunches += 1;

                if (action == 'score') {

                    newValues.TotalPoints = userGame.TotalPoints += 1;
                    newValues.CurrentPoints = userGame.CurrentPoints += 1;

                    if (userGame.CurrentPoints >= userGame.HighestPoints) {

                        newValues.HighestPoints = userGame.CurrentPoints;
                    }

                } else {

                    // Miss
                    newValues.CurrentPoints = 0;
                }

                userGameDataStore.update({ _id: userGameId }, { $set: newValues }, function(err, docs) {

                    // Overwrite the values of the in-memory object
                    for (var prop in newValues) {
                        userGame[prop] = newValues[prop];
                    }

                    resolve(userGame);
                });
                
            });

        });
    }
    
}

module.exports = userGameService;