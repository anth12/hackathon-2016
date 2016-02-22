App.controller('ConfigurationController', function ($scope, NotificationService, GameDataService, UserGameDataService, CurrentGameFactory, GameService) {
    
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

    var shownSearchNotification = false;
    $scope.search = function() {

        if (shownSearchNotification)
            return;

        NotificationService.warning('Sorry, the search is not yet available');
    }
    /**
     * Live update
     */
    var socket = io('/total-points');
    
    socket.on('update', function (response) {
        
        $('#odometer').html(response);
        $scope.TotalLaunches = response;
        $scope.$apply();
    });
    
    //Load the total by default
    UserGameDataService.sumLaunches().then(function (totalLaunches) {

        $('#odometer').html(totalLaunches);
    });

    // Attempt to auto-start
    var urlCode = location.pathname.replace(/^\//, '');
    
    if (urlCode.length > 0 && /^[A-z0-9\-]*$/.test(urlCode)) {
        
        // Lookup the Url
        GameDataService.getByUrl(urlCode).then(function (game) {
            
            if (game != null) {

                $scope.startGame(game._id);
            }
        });
    }

    /*
     * Handle Errors redirected to the home page
     */
    switch (location.search.replace('?error=', '')) {
        case 'fileSize':
            NotificationService.error('File uploads are limited to 2.5mb');
        break;
        default:
    }
});