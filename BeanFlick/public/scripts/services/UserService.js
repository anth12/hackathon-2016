App.service('UserService', ['$http', function ($http) {
        
        var userService = {
            
            currentUser: null,

            getCurrentUser: function () {
                
                var deferred = Q.defer();
                var sessionId = localStorage.getItem('SessionId');
                
                if (sessionId == null) {

                    // Create a new session

                    $http.post('/api/user/create').then(function(response) {
                        
                        userService.currentUser = response.data;
                        
                        // Set the local sessinId
                        if (userService.currentUser.Sessions.length < 0) {
                            throw Error("Invalid session");
                        }
                        
                        var latestSession = userService.currentUser.Sessions[userService.currentUser.Sessions.length -1];
                        localStorage.setItem('SessionId', latestSession.ClientId);
                        deferred.resolve(userService.currentUser);
                    });
                } else {
                    
                    // Load the existing session
                    $http.get('/api/user/' + sessionId).then(function(response) {

                        userService.currentUser = response.data;
                        
                        deferred.resolve(userService.currentUser);
                    });
                }

                return deferred.promise;
            } /* getCurrentUser */

        } /* userService */
        
        return userService;
    }])