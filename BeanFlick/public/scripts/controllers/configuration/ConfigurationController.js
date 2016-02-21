App.controller('ConfigurationController', function ($scope, UserGameDataService, CurrentGameFactory) {
    
    $scope.startGame = function(gameId) {

        UserGameDataService.start(gameId).then(function(userGame) {

            CurrentGameFactory.currentGame = userGame;
        });
    }
        
});