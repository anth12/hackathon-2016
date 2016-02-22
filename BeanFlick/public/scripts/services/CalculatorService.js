App.service('CalculatorService', function (InteractionFactory, GlobalSettingsFactory, ImageFactory) {
    
    var eventBufferX = [];
    var eventBufferY = [];
    
    this.friction = function () {
        var speedY = InteractionFactory.movementData.speedY;
        var speedX = InteractionFactory.movementData.speedX;
        var friction = GlobalSettingsFactory.friction;
        var needToStopY = false;
        var needToStopX = false;

        if (GlobalSettingsFactory.mouthLargestY + ImageFactory.face.positionY > InteractionFactory.y) {
            return true;
        }

        if (speedY >= 0) {
            if (speedY - friction > 0) {
                InteractionFactory.movementData.speedY -= friction;
            } else {
                needToStopY = true;
            }
        }
        
        if (speedY <= 0) {
            if (speedY + friction < 0) {
                InteractionFactory.movementData.speedY += friction;
            } else {
                needToStopY = true;
            }
        }
        
        if (speedX >= 0) {
            if (speedX - friction > 0) {
                InteractionFactory.movementData.speedX -= friction;
            } else {
                needToStopX = true;
            }
        }
        
        if (speedX <= 0) {
            if (speedX + friction < 0) {
                InteractionFactory.movementData.speedX += friction;
            } else {
                needToStopX = true;
            }
        }
        
        return needToStopY && needToStopX;

    }
    
    this.movementData = function () {
        var down = InteractionFactory.downData;
        var up = InteractionFactory.upData;
        
        var dy = down.y - up.y;
        
        // Remember to flip coordinates because 0,0 is top left NOT bottom right
        var dx = up.x - down.x;
        
        var lengthMs = up.time - down.time;
        var lengthS = lengthMs / 1000;
        
        return {
            clickLength: lengthMs,
            distanceX: dx,
            distanceY: dy,
            distanceXY: Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)),
            speedX: dx / lengthS,
            speedY: dy / lengthS,
            speedXY: (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))) / lengthS,
            raidanDirection: Math.atan2(dy, -dx),
            degreeDirection: Math.atan2(dy, -dx) * 180 / Math.PI
        }
    }
    
    this.scored = function () {
        // TODO: check y values for higheset y
        var a = InteractionFactory.x > GlobalSettingsFactory.mouthData.mouthLeft.x + ImageFactory.face.shiftX;
        var b = InteractionFactory.x < GlobalSettingsFactory.mouthData.mouthRight.x + ImageFactory.face.shiftX;
        var c = InteractionFactory.y < GlobalSettingsFactory.mouthSmallestY + ImageFactory.face.positionY + 50;
        var d = InteractionFactory.mouthOpening >= ImageFactory.throwable.height;
        

        if (InteractionFactory.x > GlobalSettingsFactory.mouthData.mouthLeft.x + ImageFactory.face.shiftX
                && InteractionFactory.x < GlobalSettingsFactory.mouthData.mouthRight.x + ImageFactory.face.shiftX
                && InteractionFactory.y < GlobalSettingsFactory.mouthSmallestY + ImageFactory.face.positionY + 50
                && InteractionFactory.mouthOpening  >= ImageFactory.throwable.height) {
            return true;
        }

    }
    
    this.sizeImage = function (image, width) {

        var divideValue = image.width / width;
        
        return {
            width: width,
            height: image.height / divideValue
        }
    }
    
    this.moveBuffer = function ($event) {
        eventBufferX.push($event.pageX);
        eventBufferY.push($event.pageY);
        
        if (eventBufferY.length >= 20) {
            if (eventBufferY[0] - eventBufferY[eventBufferY.length - 1] < -20) {
                InteractionFactory.downData.y = $event.pageY;
                InteractionFactory.downData.time = Date.now();

            }
            
            if (eventBufferY.length >= 20) {

            }
        }
    }


})