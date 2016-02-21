App.service('GameService', 
    function (ImageService, ImageFactory, DrawService, InteractionFactory, GlobalSettingsFactory) {
        
    this.startGame = function () {
        var image = ImageService.getImage("throwableOne", "throwable");
        image.then(function(image) {
            ImageFactory[image.type] = image;
            DrawService.draw(image);
        });
    }

    this.resetGame = function (points) {
        InteractionFactory.x = GlobalSettingsFactory.throwableStartPosition.x;
        InteractionFactory.y = GlobalSettingsFactory.throwableStartPosition.y;
    }

});