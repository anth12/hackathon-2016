App.service('ScoreService', function (GameService, CurrentGameFactory) {
        
    var points = 0;
        

    this.scored = function () {
        points++;

        CurrentGameFactory.userGame.TotalPoints++;
        CurrentGameFactory.userGame.TotalLaunches++;
        GameService.resetGame(points);
    }

    this.notScored = function () {
        points = 0;
        
        CurrentGameFactory.userGame.TotalPoints = 0;
        CurrentGameFactory.userGame.TotalLaunches++;
        GameService.resetGame(points);
    }

});