App.controller('ConfigurationController', function ($scope, GameDataService, UserGameDataService, CurrentGameFactory) {
    
    $scope.startGame = function(gameId) {

        UserGameDataService.start(gameId).then(function(gameContext) {

            CurrentGameFactory.userGame = gameContext.userGame;
            CurrentGameFactory.game = gameContext.game;
            
        });
    }
        
});