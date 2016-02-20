// returns a new image to be drawn to the canvas

App.service('ImageService', ['$q', function ($q) {
    
    var imagePaths = {
        launcherOne: "/images/launcherOne.png",
        launcherTwo: "/images/launcherTwo.png",
        launcherThree: "/images/launcherThree.png",
        launcherFour: "/images/launcherFour.png",
        
        throwableOne: "/images/throwableOne.png",
        throwableTwo: "/images/throwableTwo.png",
        throwableThree: "/images/throwableThree.png",
        throwableFour: "/images/throwableFour.png"
    }
    
    this.getImage = function ($imageName, $type) {
        var image = new Image();
        var imageProperties = {};
        
        image.src = imagePaths[$imageName];
        
        var deferred = $q.defer();
        
        image.onload = function () {
                        
            deferred.resolve({
                name: $imageName,
                image: image,
                type: $type,
                width: image.width,
                height: image.height,
                centerX: image.width / 2,
                centerY: image.height / 2
            })
        }
        
        return deferred.promise;

    }

}])