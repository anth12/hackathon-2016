App.service('DrawService', ['$q', 'CanvasFactory', 'InteractionFactory', 'ImageFactory', 'GlobalSettingsFactory', 'CalculatorService',
    function ($q, CanvasFactory, InteractionFactory, ImageFactory, GlobalSettingsFactory, CalculatorService) {
        
        var animationLoop;
        var interval;

        this.draw = function (image) {
            startAnimation(image);
        }
        
        
        this.clear = function () {
            clear();
        }
        
        this.movement = function () {
            
            var deferred = $q.defer();
            var powerSetting = GlobalSettingsFactory.powerSetting;

            interval = setInterval(function () {
                
                
                var needToStop = CalculatorService.friction();
                
                if (needToStop) {
                    clearInterval(interval);
                    deferred.resolve(true);
                } else {
                    
                    if (InteractionFactory.y - ImageFactory.throwable.centerY + CanvasFactory.offsetTop > 0 
                        && InteractionFactory.y + ImageFactory.throwable.centerY + CanvasFactory.offsetTop < CanvasFactory.offsetTop + CanvasFactory.height) {
                        
                        InteractionFactory.y -= InteractionFactory.movementData.speedY / 300;
                    } else {
                        clearInterval(interval);
                        deferred.resolve(true);
                    }
                    
                    if (InteractionFactory.x - ImageFactory.throwable.centerX + CanvasFactory.offsetLeft > 0 
                        && InteractionFactory.x + ImageFactory.throwable.centerX + CanvasFactory.offsetLeft < CanvasFactory.offsetLeft + CanvasFactory.width) {

                        InteractionFactory.x += InteractionFactory.movementData.speedX / 300;
                    } else {
                        clearInterval(interval);
                        deferred.resolve(true);
                    }

                }

            })

            return deferred.promise;

        }
        
        function startAnimation(image) {
            clear();
            var mouth = GlobalSettingsFactory.mouthArea;
            var context = CanvasFactory.canvasContext;
            
            context.beginPath();
            context.rect(mouth.x, mouth.y, mouth.width, mouth.height);
            context.fillStyle = "red";
            context.fill();

            context.drawImage(image.image, InteractionFactory.x - image.centerX, InteractionFactory.y - image.centerY, image.width, image.height);
                       

            animationLoop = window.requestAnimationFrame(function () {
                startAnimation(image);
            });
        }
        
        function clear() {
            CanvasFactory.canvasContext.clearRect(0, 0, CanvasFactory.width, CanvasFactory.height);
        }

    }])