App.service('ScoreService', function (GameService, CurrentGameFactory, AchievementService) {
        
    var points = 0;
    var socket = io('/points');
    
    socket.on('update', function (response) {
        
        CurrentGameFactory.userGame.TotalLaunches = response.TotalLaunches;
        CurrentGameFactory.userGame.TotalPoints = response.TotalPoints;
        CurrentGameFactory.userGame.HighestPoints = response.HighestPoints;
        CurrentGameFactory.userGame.CurrentPoints = response.CurrentPoints;
        
    });

    //TODO move sockets connection into service
    socket.on('achievement', AchievementService.render); 

    this.scored = function () {
        points++;
        
        socket.emit('interaction', {
            _id: CurrentGameFactory.userGame._id,
            action: 'score'
        });

        GameService.resetGame(points);
    }

    this.notScored = function () {
        points = 0;
        
        socket.emit('interaction', {
            _id: CurrentGameFactory.userGame._id,
            action: 'miss'
        });

        GameService.resetGame(points);
    }

});