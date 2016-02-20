App.controller('PageController', function ($scope, UserDataService) {
    
    $scope.currentGame = {};
    
    // Ensure a valid user is found
    if (UserDataService.currentUser == null) {
        
        UserDataService.getCurrentUser().then(function (user) {
            
            $scope.currentUser = user;

        });
    }
        
});