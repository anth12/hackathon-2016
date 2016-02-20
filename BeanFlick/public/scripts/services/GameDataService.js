App.service('GameDataService', function($http, $q) {

    var userService = {
        currentUser: null,

        getPopular: function() {
            
            var deferred = $q.defer();

            $http.get('/api/game/popular').then(function(response) {
                
                deferred.resolve(response.data);
            });

            return deferred.promise;
        }, /* getPopular */

        get: function (gameId) {
            
            var deferred = $q.defer();
            
            $http.post('/api/game/' + gameId).then(function (response) {
                
                deferred.resolve(response.data);
            });
            
            return deferred.promise;
        } /* get */

    } /* userService */

    return userService;
});