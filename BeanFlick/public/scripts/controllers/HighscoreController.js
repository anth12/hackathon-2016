App.controller('HighscoreController', function ($scope, GameDataService, CurrentGameFactory) {

    $scope.currentGameFactory = CurrentGameFactory;
    var timerId = -1;

    $scope.update = function() {
        clearTimeout(timerId);

        if (CurrentGameFactory.game != null) {

            GameDataService.getHighscores(CurrentGameFactory.game != null ? CurrentGameFactory.game._id : '').then(function(data) {

                $scope.model = data;
            });
        }

        $scope.timerId = setTimeout($scope.update, 10 * 1000);
    }
    
    $scope.$watch('currentGameFactory.game', function () {
        
        $scope.update();
    });

});