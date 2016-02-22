var userDataStore = require('./DataAccess/UserDataStore');
var userGameDataStore = require('./DataAccess/UserGameDataStore');
var userService = require('./UserService');

var achievementService = {
    
    checkCustom: function (userId, achievementCallback) {
        
        return new Promise(function (resolve, reject) {
            
            // Prepare the data
            userService.get(userId).then(function (user) {

                userGameDataStore.find({ UserId: userId }, function (userGames) {

                    achievementCallback(user, userGames).then(function(achievement) {

                        //The Custom Achievement
                        if (achievement == null || achievement == false) {
                            reject();
                        } else {

                            // Add the Achievement to the profile
                            userGameDataStore.update({ Id: userId }, { '$push': { Achievements: achievement } }, function(err, doc) {

                                resolve(achievement);
                            });
                        }
                    });
                });
            });
            

        });
    },

    checkForAchievements: function(userId, callback) {
        
        // Prepare the data
        userService.get(userId).then(function (users) {
            var user = users[0];

            userGameDataStore.find({ UserId: user.Id }, function (err, userGames) {

                if (userGames == null)
                    return;

                /*
                 * Check Achievements
                 */

                achievementService.achievments.forEach(function(achievement) {
                    
                    // No need to check achievements the user already has
                    var userHasAchievement = user.Achievements.indexOf(achievement.key) > -1;

                    if (userHasAchievement)
                        return;
                    
                    // Check if the Achievement has been earnt
                    var achievementAwarded = achievement.check(user, userGames);

                    if (!achievementAwarded)
                        return;

                    // Add the Achievement to the profile
                    userDataStore.update({ Id: userId }, { '$push': { Achievements: achievement.key } }, function (err, doc) {
                        
                        callback({ name: achievement.name, description: achievement.description });
                    });

                });

            });
        });

    },

    achievments: [

        // First Point
        {
            key: 'first-point',
            name: 'First Point!',
            description: 'Well done, you got your first point', 
            check: function (user, userGames) {
                return userGames.some(function (game) {
                    return game.CurrentPoints === 1;
                });
            }
        },

        // 5 points
        {
            key: '5-point',
            name: 'Five Point', 
            description: 'Nice job, thats 5 points now', 
            check: function (user, userGames) {
                return userGames.some(function (game) {
                    return game.CurrentPoints === 5;
                });
            }
        },

        // 2 games
        {
            key: '2-games',
            name: 'Explorer', 
            description: '2 games, glad you like it :)', 
            check: function (user, userGames) {
                return userGames.length == 2;
            }
        },

        // 5 points on 2 games
        {
            key: '5-points-2-games',
            name: 'Amature', 
            description: '5 points on 2 games, now you are getting the hang of it', 
            check: function (user, userGames) {
                return userGames.length >= 2 && userGames.filter(function (game) {
                    return game.CurrentPoints >= 5;
                }) >= 2;
            }
        },

        // custom game user
        {
            key: 'custom-games',
            name: 'Welcome to the club', 
            description: 'Join a custom game', 
            check: function (user, userGames) {
                return userGames.some(function (game) {
                    return game.UserDefined;
                });
            }
        }

    ]
}

module.exports = achievementService;