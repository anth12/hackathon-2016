App.controller('ConfigurationController', function ($scope, NotificationService, GameDataService, UserGameDataService, CurrentGameFactory, GameService) {
    
    $scope.testNotifiy = function(type) {

        NotificationService._show(type, 'Sample notification message');

    }

    $scope.startGame = function(gameId) {

        UserGameDataService.start(gameId).then(function(gameContext) {

            CurrentGameFactory.userGame = gameContext.userGame;
            CurrentGameFactory.game = gameContext.game;

            GameService.startGame();
            
            if (history.pushState) {

                history.pushState(null, null, '/' + gameContext.game.UrlCode);
            }
        });
    }
    
    /**
     * Live update
     */
    var socket = io('/total-points');
    
    socket.on('update', function (response) {
        
        $scope.TotalLaunches = response;
        $scope.$apply();
    });
    
    //Load the total by default
    UserGameDataService.sumLaunches().then(function(totalLaunches) {

        $scope.TotalLaunches = totalLaunches;
    });

    // Attempt to auto-start
    var urlCode = location.pathname.replace(/^\//, '');
    
    if (urlCode.length > 0 && /^[a-z\-]*$/.test(urlCode)) {
        
        // Lookup the Url
        GameDataService.getByUrl(urlCode).then(function (game) {
            
            if (game != null) {

                $scope.startGame(game._id);
            }
        });
    }   
});