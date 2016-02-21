App.service('UserGameDataService', function($http, $q) {

    var userDataService = {
        currentUser: null,

        start: function(gameId) {

            var deferred = $q.defer();
            var sessionId = localStorage.getItem('SessionId');
            
            // Load the existing session
            $http.post('/api/game/start/' + sessionId + '/' + gameId).then(function(response) {
                
                deferred.resolve(response.data);
            });

            return deferred.promise;
        }, /* getCurrentUser */
        
        sumLaunches: function (gameId) {
            
            var deferred = $q.defer();
            
            // Load the existing session
            $http.get('/api/game/sum/launches/' + (gameId != null ? gameId : '')).then(function (response) {
                
                deferred.resolve(response.data.count);
            });
            
            return deferred.promise;
        }, /* sumLaunches */
        
        sumPoints: function (gameId) {
            
            var deferred = $q.defer();
            
            // Load the existing session
            $http.get('/api/game/sum/launches/' + (gameId != null ? gameId : '')).then(function (response) {
                
                deferred.resolve(response.data.count);
            });
            
            return deferred.promise;
        }, /* sumPoints */

    } /* userDataService */

    return userDataService;
})