App.controller('GameController', ['$scope', 'ImageService', 'CalculatorService', 'DrawService', 'CanvasFactory', function ($scope, ImageService, CalculatorService, DrawService, CanvasFactory) {
        

        $scope.downInteraction = function ($event) {
            
            $scope.image = ImageService.getImage("throwableOne");
            $scope.image.then(function (image) {
                DrawService.draw()
            })
            

            $scope.downData = {
                x: $event.pageX - CanvasFactory.canvasElement.offsetLeft,
                y: $event.pageY - CanvasFactory.canvasElement.offsetTop,
                time: Date.now()
            }
        };

        $scope.upInteraction = function ($event) {
            $scope.upData = {
                x: $event.pageX - CanvasFactory.canvasElement.offsetLeft,
                y: $event.pageY - CanvasFactory.canvasElement.offsetTop,
                time: Date.now()
            }

            $scope.movementData = CalculatorService.movementData($scope.downData, $scope.upData);
        }
        
    }]);