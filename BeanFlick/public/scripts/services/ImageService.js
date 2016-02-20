// returns a new image to be drawn to the canvas

App.service('ImageService', function () {
    
    var imagePaths = {
        launcherOne:        "images/launcherOne.png",
        launcherTwo:        "/images/launcherTwo.png",
        launcherThree:      "/images/launcherThree.png",
        launcherFour:       "/images/launcherFour.png",
        
        throwableOne:       "/images/throwableOne.png",
        throwableTwo:       "/images/throwableTwo.png",
        throwableThree:     "/images/throwableThree.png",
        throwableFour:      "/images/throwableFour.png"
    }
    

    this.getImage = function ($imageName) {
        var image = new Image();
        var imageProperties = {};
        
        image.src = $scope.imagePaths[$imageName];
        
        imageProperties.width = image.width;
        imageProperties.height = image.height;
        imageProperties.centerX = image.width / 2;
        imageProperties.centerY = image.height / 2;
        
        return {
            image: image,
            imageProperties: imageProperties
        }
    }

})