App.service('DrawService', function ($q, CanvasFactory, InteractionFactory, ImageFactory, GlobalSettingsFactory, CalculatorService) {
    
    var interval;
    var throwable;
    var launcher;
    var face;
    var mouthY;
    var mouthX;
    var mouthWidth;
    var mouthHeight;
    var context;
    var mouthPolygon;
    var mouthPolygonContext;
    
    this.draw = function () {
        throwable = ImageFactory.throwable;
        face = ImageFactory.face;
        ImageFactory.face.shiftX = (CanvasFactory.width - face.width) / 2;
        context = CanvasFactory.canvasContext;
        
        mouthPolygon = document.createElement('canvas');
        mouthPolygon.width = face.width;
        mouthPolygon.height = face.height;
        mouthPolygonContext = mouthPolygon.getContext('2d');

        mouthY = 0;
        
        drawBackground();        
        drawMouthPolygon();
        startAnimation();
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
            
            if (InteractionFactory.y - ImageFactory.throwable.centerY > 0  && InteractionFactory.y + ImageFactory.throwable.centerY < CanvasFactory.height) {
                InteractionFactory.y -= InteractionFactory.movementData.speedY / 300;
            } else {
                clearInterval(interval);
                deferred.resolve({
                    stop: true,
                    scored: false
                });
            }
            
            if (InteractionFactory.x - ImageFactory.throwable.centerX > 0  && InteractionFactory.x + ImageFactory.throwable.centerX < CanvasFactory.width) {
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
        
        drawBackground();
        
        mouthHandler();
        
        context.drawImage(face.image, ImageFactory.face.shiftX, face.positionY, face.width, face.height);
        drawMouthMask();
        context.drawImage(mouthPolygon, ImageFactory.face.shiftX, mouthY + face.positionY);
        drawThrowArea();
        context.drawImage(throwable.image, InteractionFactory.x - throwable.centerX, InteractionFactory.y - throwable.centerY, throwable.width, throwable.height);

        window.requestAnimationFrame(function () {
            startAnimation();
        });
    }
    
    function drawBackground() {
        context.beginPath();
        context.rect(0, 0, CanvasFactory.width, CanvasFactory.height);
        context.fillStyle = "#17c2a4";
        context.fill();
    }
    
    function drawThrowArea() {
        var text = "Flick Your Bean";
        context.beginPath();
        context.rect(0, CanvasFactory.height - GlobalSettingsFactory.throwAreaHeight, CanvasFactory.width, GlobalSettingsFactory.throwAreaHeight);
        context.fillStyle = "#d74680";
        context.fill();

        context.beginPath();
        context.font = "70px Arial";
        context.fillStyle = "#db6190";
        context.fillText(text, (CanvasFactory.width / 2 - context.measureText(text).width / 2), CanvasFactory.height - (GlobalSettingsFactory.throwAreaHeight / 2))

    }
    
    function mouthHandler() {
        if (0 >= mouthY - 50 && GlobalSettingsFactory.mouthClosed) {
            mouthY += GlobalSettingsFactory.mouthSpeed;
        } else {
            GlobalSettingsFactory.mouthClosed = false;
            mouthY -= GlobalSettingsFactory.mouthSpeed;
            if (0 >= mouthY) {
                GlobalSettingsFactory.mouthClosed = true;
            }

        }
        
        InteractionFactory.mouthOpening = mouthY;

    }
    
    function drawMouthPolygon() {
        mouthPolygonContext.beginPath();
        mouthPolygonContext.moveTo(GlobalSettingsFactory.mouthData.mouthLeft.x, GlobalSettingsFactory.mouthData.mouthLeft.y);
        mouthPolygonContext.lineTo(GlobalSettingsFactory.mouthData.mouthRight.x, GlobalSettingsFactory.mouthData.mouthRight.y);
        mouthPolygonContext.lineTo(GlobalSettingsFactory.mouthData.mouthRight.x, GlobalSettingsFactory.mouthData.mouthRight.y + 50);
        mouthPolygonContext.lineTo(GlobalSettingsFactory.mouthData.mouthLeft.x, (GlobalSettingsFactory.mouthData.mouthLeft.y + 50) - (GlobalSettingsFactory.mouthData.mouthLeft.y - GlobalSettingsFactory.mouthData.mouthRight.y));
        mouthPolygonContext.closePath();
        mouthPolygonContext.clip();
        mouthPolygonContext.drawImage(face.image, 0, face.positionY, face.width, face.height)
    }
    
    function drawMouthMask() {

        context.beginPath();
        context.fillStyle = "black";
        context.moveTo(GlobalSettingsFactory.mouthData.mouthLeft.x + ImageFactory.face.shiftX, GlobalSettingsFactory.mouthData.mouthLeft.y + face.positionY);
        context.lineTo(GlobalSettingsFactory.mouthData.mouthRight.x + ImageFactory.face.shiftX, GlobalSettingsFactory.mouthData.mouthRight.y + face.positionY);
        context.lineTo(GlobalSettingsFactory.mouthData.mouthRight.x + ImageFactory.face.shiftX, GlobalSettingsFactory.mouthData.mouthRight.y + 50 + face.positionY);
        context.lineTo(GlobalSettingsFactory.mouthData.mouthLeft.x + ImageFactory.face.shiftX, (GlobalSettingsFactory.mouthData.mouthLeft.y + 50 + face.positionY) - (GlobalSettingsFactory.mouthData.mouthLeft.y - GlobalSettingsFactory.mouthData.mouthRight.y));
        context.closePath();
        context.fill();   
    }
    
    function clear() {
        CanvasFactory.canvasContext.clearRect(0, 0, CanvasFactory.width, CanvasFactory.height);
    }

})