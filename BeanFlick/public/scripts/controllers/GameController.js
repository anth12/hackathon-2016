App.controller('GameController', ['$scope', 'ImageService', 'CalculatorService', 'DrawService', function ($scope, ImageService, CalculatorService, DrawService) {
        

        $scope.downInteraction = function ($event) {
            
            $scope.image = ImageService.getImage("throwableOne");
            $scope.image.then(function (image) {
                DrawService.draw()
            })
            

            $scope.downData = {
                x: $event.pageX - $scope.canvas.offsetLeft,
                y: $event.pageY - $scope.canvas.offsetTop,
                time: Date.now()
            }
        };

        $scope.upInteraction = function ($event) {
            $scope.upData = {
                x: $event.pageX - $scope.canvas.offsetLeft,
                y: $event.pageY - $scope.canvas.offsetTop,
                time: Date.now()
            }

            $scope.movementData = CalculatorService.movementData($scope.downData, $scope.upData);
        }
        
    }]);