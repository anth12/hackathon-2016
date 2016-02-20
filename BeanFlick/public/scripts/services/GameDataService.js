App.service('GameDataService', function($http) {

    var userService = {
        currentUser: null,

        getPopular: function() {
            
            var deferred = Q.defer();

            $http.post('/api/game/popular').then(function(response) {
                
                deferred.resolve(response.data);
            });

            return deferred.promise;
        }, /* getPopular */

        get: function (gameId) {
            
            var deferred = Q.defer();
            
            $http.post('/api/game/' + gameId).then(function (response) {
                
                deferred.resolve(response.data);
            });
            
            return deferred.promise;
        } /* get */

    } /* userService */

    return userService;
});