App.controller('GameController', ['$scope', 'ImageService', 'CalculatorService', function ($scope, ImageService, CalculatorService) {
        
        $scope.image = ImageService.getImage("throwableOne");
        $scope.image.then(function (image) {
                
        })

        $scope.downInteraction = function ($event) {
            
        };

        $scope.upInteraction = function ($event) {

        }

        
    }]);