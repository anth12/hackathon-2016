App.service('GameService', 
    function (ImageService, InteractionFactory, GlobalSettingsFactory, CurrentGameFactory, CanvasFactory) {
        
    this.startGame = function () {
        
        CanvasFactory.canvasElement.height = window.innerHeight;
        CanvasFactory.height = window.innerHeight;

        GlobalSettingsFactory.mouthData.mouthLeft.x = CurrentGameFactory.game.MouthLeft.X;
        GlobalSettingsFactory.mouthData.mouthLeft.y = CurrentGameFactory.game.MouthLeft.Y;
        GlobalSettingsFactory.mouthData.mouthRight.x = CurrentGameFactory.game.MouthRight.X;
        GlobalSettingsFactory.mouthData.mouthRight.y = CurrentGameFactory.game.MouthRight.Y;
        

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