// returns a new image to be drawn to the canvas

App.service('ImageService', function () {
    
    var imagePaths = {
        launcherOne: "images/launcherOne.png",
        launcherTwo: "/images/launcherTwo.png",
        launcherThree: "/images/launcherThree.png",
        launcherFour: "/images/launcherFour.png",
        
        throwableOne: "/images/throwableOne.png",
        throwableTwo: "/images/throwableTwo.png",
        throwableThree: "/images/throwableThree.png",
        throwableFour: "/images/throwableFour.png"
    }
    
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    
    this.getImage = function ($imageName) {
        var image = new Image();
        var imageProperties = {};
        
        image.src = imagePaths[$imageName];
        
        var deferred = Q.defer();

        image.onload = function () {

            imageProperties.width = image.width;
            imageProperties.height = image.height;
            imageProperties.centerX = image.width / 2;
            imageProperties.centerY = image.height / 2;
        
            deferred.resolve ({
                image: image,
                imageProperties: imageProperties
            })
        }

        return deferred.promise;

    }

})