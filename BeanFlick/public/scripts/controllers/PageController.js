App.controller('PageController', function ($scope, UserService) {
        
        // Ensure a valid user is found
        if (UserService.currentUser == null) {
            
            UserService.getCurrentUser().then(function (user) {
                
                $scope.currentUser = user;
                $scope.$apply();
            });
        }
        
    });