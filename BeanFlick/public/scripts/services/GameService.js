App.service('GameService', 
    function (ImageService, InteractionFactory, GlobalSettingsFactory, CurrentGameFactory) {
        
    this.startGame = function () {
        ImageService.getImages([
            ["/images/throwableOne.png", "throwable"],
            [CurrentGameFactory.game.BackgroundImage, "face"]
        ]);     
    }

    this.resetGame = function (points) {
        InteractionFactory.x = GlobalSettingsFactory.throwableStartPosition.x;
        InteractionFactory.y = GlobalSettingsFactory.throwableStartPosition.y;
    }

});