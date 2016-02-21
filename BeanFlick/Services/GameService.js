var guid = require('node-uuid');

var Game = require('../Domain/Game');
var UserGame = require('../Domain/UserGame');

var gameDataStore = require('./DataAccess/GameDataStore');
var userGameDataStore = require('./DataAccess/UserGameDataStore');

var userService = require('./UserService');

var gameService = {
    
    //#region Query
    
    getPopular: function (id) {
        
        return new Promise(function (resolve, reject) {
            
            gameDataStore.find({ UserDefined: false /* TODO, extend*/ }, function (err, docs) {
                
                resolve(docs);
            });

        });
    },

    get: function(id) {

        return new Promise(function (resolve, reject) {

            gameDataStore.find({ _id: id }, function(err, docs) {

                resolve(docs[0]);
            });

        });
    },
    
    getByUrl: function(urlCode) {
      
        return new Promise(function (resolve, reject) {
            
            gameDataStore.find({ UrlCode: urlCode }, function (err, docs) {
                
                resolve(docs[0]);
            });

        });
    },
    
    getOrCreateUserGame: function(sessionId, gameId) {

        return new Promise(function (resolve, reject) {

            // Validate the session
            userService.getBySession(sessionId).then(function(user) {

                // Check for existing UserGames
                userGameDataStore.find({ UserId: user.Id, GameId: gameId }, function(err, existingUserGame) {

                    if (existingUserGame != null && existingUserGame.length > 0) {

                        resolve(existingUserGame[0]);
                    } else {

                        // Create a new User Game
                        gameService.createUserGame(user.Id, gameId).then(function(game) {
                            resolve(game);
                        });
                    }
                });

            });

        });
    },
    
    createUserGame: function(userId, gameId) {

        return new Promise(function(resolve, reject) {

            var userGame = new UserGame(userId, gameId);

            userGameDataStore.insert(userGame, function(err, docs) {

                resolve(docs[0]);
            });
        });
    },
    
    //#endregion
    
    //#region Sum
    
    sumPoints: function (gameId) {
        
        return new Promise(function (resolve, reject) {
            
            var query = gameId != null ? { GameId: gameId } : {};
            
            userGameDataStore.find(query, function (err, docs) {
                
                var sum = 0;
                docs.forEach(function (doc) {
                    sum += doc.TotalPoints;
                });
                
                resolve(sum);
            });

        });
    },

    sumLaunches: function(gameId) {
        
        return new Promise(function (resolve, reject) {

            var query = gameId != null ? { GameId: gameId } : {};

            userGameDataStore.find(query, function (err, docs) {

                var sum = 0;
                docs.forEach(function(doc) {
                    sum += doc.TotalLaunches;
                });

                resolve(sum);
            });

        });
    },

    //#endregion

    createUser: function () {

        var user = new User(guid.v4(), userService.createName());

        userDataStore.insert(user);

        return user;
    },

    createName: function() {

        var name = adjectives[parseInt(Math.random() * adjectives.length)];
        name += ' ' + animalNames[parseInt(Math.random() * animalNames.length)];

        return name;
    }
}

module.exports = gameService;