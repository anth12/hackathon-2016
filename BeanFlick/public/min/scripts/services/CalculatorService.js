App.service('CalculatorService', function (InteractionFactory, GlobalSettingsFactory) {

    this.friction = function () {
        var speedY = InteractionFactory.movementData.speedY;
        var speedX = InteractionFactory.movementData.speedX;
        var friction = GlobalSettingsFactory.friction;
        var needToStopY = false;
        var needToStopX = false;

        if (speedY > 0) {
            if (speedY - friction > 0) {
                InteractionFactory.movementData.speedY -= friction;
            } else {
                needToStopY = true;
            }
        }

        if (speedY < 0) {
            if (speedY + friction < 0) {
                InteractionFactory.movementData.speedY += friction;
            } else {
                needToStopY = true;
            }
        }

        if (speedX > 0) {
            if (speedX - friction > 0) {
                InteractionFactory.movementData.speedX -= friction;
            } else {
                needToStopX = true;
            }
        }

        if (speedX < 0) {
            if (speedX + friction < 0) {
                InteractionFactory.movementData.speedX += friction;
            } else {
                needToStopX = true;
            }
        }

        return needToStopY && needToStopX;
    };

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
            speedXY: Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) / lengthS,
            raidanDirection: Math.atan2(dy, -dx),
            degreeDirection: Math.atan2(dy, -dx) * 180 / Math.PI
        };
    };

    this.scored = function () {
        if (InteractionFactory.x > GlobalSettingsFactory.mouthArea.x && InteractionFactory.x < GlobalSettingsFactory.mouthArea.x + GlobalSettingsFactory.mouthArea.width && InteractionFactory.y < GlobalSettingsFactory.mouthArea.y + GlobalSettingsFactory.mouthArea.height) {
            return true;
        }
    };

    this.sizeImage = function (image) {
        var width = GlobalSettingsFactory.throwableSize.width;
        var divideValue = image.width / width;

        return {
            width: width,
            height: image.height / divideValue
        };
    };
});