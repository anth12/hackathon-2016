var guid = require('node-uuid');
var gameDataStore = require('./DataAccess/GameDataStore');
var Game = require('../Domain/Game');

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

            gameDataStore.find({ Id: id }, function(err, docs) {

                resolve(docs[0]);
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