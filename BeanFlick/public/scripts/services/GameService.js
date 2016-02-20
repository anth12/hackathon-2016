App.service('GameService', ['ImageService', 'ImageFactory', 'DrawService', function (ImageService, ImageFactory, DrawService) {
        
        this.startGame = function () {
            var image = ImageService.getImage("throwableOne", "throwable");
            image.then(function (image) {
                ImageFactory[image.type] = image;
                DrawService.draw(image)
            })
        }

        this.restartGame = function () {

        }

    }]);