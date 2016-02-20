App.service('CalculatorService', ['InteractionFactory', 'GlobalSettingsService', function (InteractionFactory, GlobalSettingsService) {
        
        this.friction = function () {
            var speedY = InteractionFactory.movementData.speedY;
            var speedX = InteractionFactory.movementData.speedX;
            var friction = GlobalSettingsService.globalSettings().friction;
            var needToStop = false;
            
            if (speedY > 0 && speedY - friction > 0) {
                InteractionFactory.movementData.speedY -= friction;
            } else {
                needToStop = true;
            }
            
            if (speedY < 0 && speedY + friction < 0) {
                InteractionFactory.movementData.speedY += friction;
            } else {
                needToStop = true;
            }
            
            if (speedX > 0 && speedX - friction > 0) {
                InteractionFactory.movementData.speedX -= friction;
            } else {
                needToStop = true;
            }
            
            if (speedX < 0 && speedX + friction < 0) {
                InteractionFactory.movementData.speedX += friction;
            } else {
                needToStop = true;
            }

            return needToStop;

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

    }])