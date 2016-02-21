App.service('ScoreService', ['GameService', function (GameService) {
        
        var points = 0;
        

        this.scored = function () {
            points++;
            GameService.resetGame(points);
        }

        this.notScored = function () {
            points = 0;
            GameService.resetGame(points);
        }

    }]);