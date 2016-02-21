App.service('DrawService', function ($q, CanvasFactory, InteractionFactory, ImageFactory, GlobalSettingsFactory, CalculatorService) {
    
    var animationLoop;
    var interval;
    var throwable;
    var launcher;
    var face;
    var mouthY;
    var mouthX;
    var mouthWidth;
    var mouthHeight;
    var context;
    var mouthSection;
    var mouthClosed = true;
    
    this.draw = function () {
        throwable = ImageFactory.throwable;
        face = ImageFactory.face;
        context = CanvasFactory.canvasContext;

        mouthY = GlobalSettingsFactory.mouthArea.y;
        mouthX = GlobalSettingsFactory.mouthArea.x;
        mouthWidth = GlobalSettingsFactory.mouthArea.width;
        mouthHeight = GlobalSettingsFactory.mouthArea.height;
        
        context.beginPath();
        context.rect(GlobalSettingsFactory.mouthArea.x, GlobalSettingsFactory.mouthArea.y, mouthWidth, mouthY);
        context.fillStyle = "black";
        context.fill();

        context.drawImage(face.image, 0, 0, face.width, face.height);
        mouthSection = context.getImageData(mouthX, mouthY, mouthWidth, mouthHeight);
        mouthY += 1;
        context.putImageData(mouthSection, mouthX, mouthY);
        
        context.drawImage(throwable.image, InteractionFactory.x - throwable.centerX, InteractionFactory.y - throwable.centerY, throwable.width, throwable.height);

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
        
        context.drawImage(face.image, 0, 0, face.width, face.height);

        if (GlobalSettingsFactory.mouthArea.y >= mouthY - 100 && mouthClosed) {
            mouthY += 1;
        } else {
            mouthClosed = false;
            mouthY -= 1;
            if (GlobalSettingsFactory.mouthArea.y >= mouthY) {
                mouthClosed = true;
            }
        }

        context.beginPath();
        context.rect(GlobalSettingsFactory.mouthArea.x, GlobalSettingsFactory.mouthArea.y, mouthWidth, mouthY);
        context.fillStyle = "black";
        context.fill();

        context.putImageData(mouthSection, mouthX, mouthY);
        
        context.drawImage(throwable.image, InteractionFactory.x - throwable.centerX, InteractionFactory.y - throwable.centerY, throwable.width, throwable.height);
        
        animationLoop = window.requestAnimationFrame(function () {
            startAnimation();
        });
    }
    
    function clear() {
        CanvasFactory.canvasContext.clearRect(0, 0, CanvasFactory.width, CanvasFactory.height);
    }

})