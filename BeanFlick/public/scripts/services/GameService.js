App.service('GameService', ['$q', 'ImageService', 'ImageFactory', 'DrawService', 'InteractionFactory', 'GlobalSettingsFactory', 'CurrentGameFactory',
    function ($q, ImageService, ImageFactory, DrawService, InteractionFactory, GlobalSettingsFactory, CurrentGameFactory) {
        
        this.startGame = function () {
            ImageService.getImages([
                ["/images/throwableOne.png", "throwable"],
                [CurrentGameFactory.game.BackgroundImage, "face"]
            ]);

            
        }

        this.resetGame = function (points) {
            InteractionFactory.x = GlobalSettingsFactory.throwableStartPosition.x;
            InteractionFactory.y = GlobalSettingsFactory.throwableStartPosition.y;
            console.log(points)
        }

    }]);