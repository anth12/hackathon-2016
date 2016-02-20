App.controller('PopularController', function ($scope, GameDataService) {

    GameDataService.getPopular().then(function(popularGames) {
        
        $scope.popularGames = popularGames;
    });

});