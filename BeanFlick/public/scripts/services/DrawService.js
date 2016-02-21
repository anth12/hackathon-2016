App.service('DrawService', ['$q', 'CanvasFactory', 'InteractionFactory', 'ImageFactory', 'GlobalSettingsFactory', 'CalculatorService',
    function ($q, CanvasFactory, InteractionFactory, ImageFactory, GlobalSettingsFactory, CalculatorService) {
        
        var animationLoop;
        var interval;
        var throwable;
        var launcher;
        var face;
        
        this.draw = function () {
            throwable = ImageFactory.throwable;
            face = ImageFactory.face;
            startAnimation();
        }
        
        
        this.clear = function () {
            clear();
        }
        
        this.movement = function () {
            
            var deferred = $q.defer();
            var powerSetting = GlobalSettingsFactory.powerSetting;
            
            interval = setInterval(function () {
                
                var scored = CalculatorService.scored();
                
                if (scored) {
                    clearInterval(interval);
                    deferred.resolve({
                        stop: true,
                        scored: true
                    });
                }
                
                var needToStop = CalculatorService.friction();
                
                if (needToStop) {
                    clearInterval(interval);
                    deferred.resolve({
                        stop: true,
                        scored: false
                    });
                }
                
                if (InteractionFactory.y - ImageFactory.throwable.centerY + CanvasFactory.offsetTop > 0 
                        && InteractionFactory.y + ImageFactory.throwable.centerY + CanvasFactory.offsetTop < CanvasFactory.offsetTop + CanvasFactory.height) {
                    
                    InteractionFactory.y -= InteractionFactory.movementData.speedY / 300;
                } else {
                    clearInterval(interval);
                    deferred.resolve({
                        stop: true,
                        scored: false
                    });
                }
                
                if (InteractionFactory.x - ImageFactory.throwable.centerX + CanvasFactory.offsetLeft > 0 
                        && InteractionFactory.x + ImageFactory.throwable.centerX + CanvasFactory.offsetLeft < CanvasFactory.offsetLeft + CanvasFactory.width) {
                    
                    InteractionFactory.x += InteractionFactory.movementData.speedX / 300;
                } else {
                    clearInterval(interval);
                    deferred.resolve({
                        stop: true,
                        scored: false
                    });
                }

                

            })
            
            return deferred.promise;

        }
        
        function startAnimation() {
            clear();
            var mouth = GlobalSettingsFactory.mouthArea;
            var context = CanvasFactory.canvasContext;
            
            context.beginPath();
            context.rect(mouth.x, mouth.y, mouth.width, mouth.height);
            context.fillStyle = "red";
            context.fill();
            
            context.drawImage(face.image, 0, 0, face.width, face.height);
            context.drawImage(throwable.image, InteractionFactory.x - throwable.centerX, InteractionFactory.y - throwable.centerY, throwable.width, throwable.height);
            
            
            animationLoop = window.requestAnimationFrame(function () {
                startAnimation();
            });
        }
        
        function clear() {
            CanvasFactory.canvasContext.clearRect(0, 0, CanvasFactory.width, CanvasFactory.height);
        }

    }])