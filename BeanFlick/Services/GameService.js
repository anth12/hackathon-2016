var guid = require('node-uuid');
var gameDataStore = require('./DataAccess/GameDataStore');
var Game = require('../Domain/Game');

var gameService = {
    
    //#region Query
    
    get: function(id) {

        return new Promise(function (resolve, reject) {

            userDataStore.find({ Id: id }, function(err, docs) {

                resolve(docs);
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