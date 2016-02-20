App.controller('PopularController', function ($scope, GameDataService) {

    $scope.popularGames = [{ Name: 'test' }];

    GameDataService.getPopular().then(function(popularGames) {
        
        $scope.popularGames = popularGames;
    });

});