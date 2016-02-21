App.service('GameDataService', function($http, $q) {

    var userService = {
        currentUser: null,

        getPopular: function() {
            
            var deferred = $q.defer();

            $http.get('/api/game/popular').then(function(response) {
                
                deferred.resolve(response.data);
            });

            return deferred.promise;
        } /* getPopular */


    } /* userService */

    return userService;
});