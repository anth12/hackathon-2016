App.service('UserDataService', function($http, $q) {

    var userDataService = {
        currentUser: null,

        getCurrentUser: function() {

            var deferred = $q.defer();
            var sessionId = localStorage.getItem('SessionId');

            if (sessionId != null) {
                // Load the existing session
                $http.get('/api/user/' + sessionId).then(function(response) {
                    
                    if (response.data == null || response.data == '') {
                        //Session is not valid
                        localStorage.removeItem('SessionId');

                        return deferred.resolve(userDataService.getCurrentUser());
                    }

                    userDataService.currentUser = response.data;

                    deferred.resolve(userDataService.currentUser);
                });
            }else{

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
            }

            return deferred.promise;
        } /* getCurrentUser */

    } /* userDataService */

    return userDataService;
})