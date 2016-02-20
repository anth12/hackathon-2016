App.service('DrawService', ['CanvasFactory', 'InteractionFactory', 'ImageFactory', function (CanvasFactory, InteractionFactory, ImageFactory) {
        
        var animationLoop;
        var interval;

        this.draw = function (image) {
            startAnimation(image);
        }
        
        
        this.clear = function () {
            clear();
        }
        
        this.movement = function () {
            
            var deferred = Q.defer();

            interval = setInterval(function () {

                if (InteractionFactory.y - ImageFactory.throwable.centerY + CanvasFactory.offsetTop > 0 && InteractionFactory.y + ImageFactory.throwable.centerY + CanvasFactory.offsetTop < CanvasFactory.offsetTop + CanvasFactory.height) {
                    InteractionFactory.y -= InteractionFactory.movementData.speedY / 300;
                } else {
                    clearInterval(interval);
                    deferred.resolve(true);
                }
                
                if (InteractionFactory.x - ImageFactory.throwable.centerX + CanvasFactory.offsetLeft > 0 && InteractionFactory.x + ImageFactory.throwable.centerX + CanvasFactory.offsetLeft < CanvasFactory.offsetLeft + CanvasFactory.width) {
                    InteractionFactory.x += InteractionFactory.movementData.speedX / 300;
                } else {
                    clearInterval(interval);
                    deferred.resolve(true);
                }

            })

            return deferred.promise;

        }
        
        function startAnimation(image) {
            clear();
            CanvasFactory.canvasContext.drawImage(image.image, InteractionFactory.x - image.centerX, InteractionFactory.y - image.centerY, image.width, image.height);
            animationLoop = window.requestAnimationFrame(function () {
                startAnimation(image);
            });
        }
        
        function clear() {
            CanvasFactory.canvasContext.clearRect(0, 0, CanvasFactory.width, CanvasFactory.height);
        }

    }])