// returns a new image to be drawn to the canvas

App.service('ImageService', function ($q, CalculatorService, ImageFactory, DrawService, GlobalSettingsFactory) {
    
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
    
    this.getImages = function ($images) {
        
        var promises = [];
        var $this = this;
        
        function loadImage(imageData) {
            return $q(function (resolve, reject) {
                var image = new Image();
                image.src = imageData[0];
                image.onload = function () {
                    var resized = CalculatorService.sizeImage(image);
                    
                    var type = imageData[1];
                    var height = image.height;
                    var width = image.width;
                    var centerX = width / 2;
                    var centerY = height / 2;
                    
                    if (type === "throwable") {
                        height = resized.height;
                        width = resized.width;
                        centerX = width / 2;
                        centerY = height / 2;
                    }
                    
                    resolve({
                        image: image,
                        type: imageData[1],
                        width: width,
                        height: height,
                        centerX: centerX,
                        centerY: centerY
                    })
                }
            })
        }
        
        $images.forEach(function (image) {
            promises.push(loadImage(image));
        })
        
        $q.all(promises).then(function (images) {
            
            for (var i = 0; i < images.length; i++) {
                var type = images[i].type;
                ImageFactory[type] = images[i]
            }
            
            $this.positionImage();
            DrawService.draw()
        })

    }

    this.positionImage = function () {
        ImageFactory.face.positionY = -300;
        GlobalSettingsFactory.mouthData.mouthLeft.y = GlobalSettingsFactory.mouthData.mouthLeft.y - 300;
        GlobalSettingsFactory.mouthData.mouthRight.y = GlobalSettingsFactory.mouthData.mouthRight.y - 300;

    }

})