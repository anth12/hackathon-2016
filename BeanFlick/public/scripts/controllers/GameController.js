App.controller('GameController', ['$scope', function ($scope, ImageService) {
        
        $scope.image = ImageService.getImage("throwableOne");
        
        ImageService.clear();
            

        $scope.downInteraction = function ($event) {

        };

        $scope.upInteraction = function ($event) {

        }

        
    }]);