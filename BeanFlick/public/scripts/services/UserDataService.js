App.service('UserDataService', function($http) {

    var userDataService = {
        currentUser: null,

        getCurrentUser: function() {

            var deferred = Q.defer();
            var sessionId = localStorage.getItem('SessionId');

            if (sessionId == null) {

                // Create a new session

                $http.post('/api/user/create').then(function(response) {

                    userDataService.currentUser = response.data;

                    // Set the local sessinId
                    if (userDataService.currentUser.Sessions.length < 0) {
                        throw Error("Invalid session");
                    }

                    var latestSession = userDataService.currentUser.Sessions[userDataService.currentUser.Sessions.length - 1];
                    localStorage.setItem('SessionId', latestSession.ClientId);
                    deferred.resolve(userDataService.currentUser);
                });
            } else {

                // Load the existing session
                $http.get('/api/user/' + sessionId).then(function(response) {

                    userDataService.currentUser = response.data;

                    deferred.resolve(userDataService.currentUser);
                });
            }

            return deferred.promise;
        } /* getCurrentUser */

    } /* userDataService */

    return userDataService;
})