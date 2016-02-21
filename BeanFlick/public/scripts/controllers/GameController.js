App.controller('GameController', function ($scope, ImageService, CalculatorService, DrawService, CanvasFactory, InteractionFactory, ImageFactory, GameService, ScoreService) {
    
    $scope.dragAllowed = false;
    $scope.interactionAllowed = true;
    
    $scope.downInteraction = function ($event) {

        if ($event.pageX < InteractionFactory.x + ImageFactory.throwable.centerX
                && $event.pageX > InteractionFactory.x - ImageFactory.throwable.centerX
                && $event.pageY < InteractionFactory.y + ImageFactory.throwable.centerY 
                && $event.pageY > InteractionFactory.y - ImageFactory.throwable.centerY 
                && $scope.interactionAllowed) {
            
            $scope.dragAllowed = true;
            
            InteractionFactory.downData = {
                x: $event.pageX,
                y: $event.pageY,
                time: Date.now()
            }

        }

    };
    
    $scope.moveInteraction = function ($event) {
        if ($scope.dragAllowed && $scope.interactionAllowed) {
            InteractionFactory.x = $event.pageX;
            InteractionFactory.y = $event.pageY;
        }
    }
    
    $scope.upInteraction = function ($event) {
        if ($scope.interactionAllowed && $scope.dragAllowed) {
            $scope.dragAllowed = false;
            $scope.interactionAllowed = false;
            
            InteractionFactory.upData = {
                x: $event.pageX,
                y: $event.pageY,
                time: Date.now()
            }
            
            InteractionFactory.movementData = CalculatorService.movementData();
            
            DrawService.movement().then(function (promise) {
                if (promise.scored) {
                    ScoreService.scored();
                }
                
                if (!promise.scored) {
                    ScoreService.notScored();
                }
                
                $scope.interactionAllowed = true;
            })
        }
    }
        

});