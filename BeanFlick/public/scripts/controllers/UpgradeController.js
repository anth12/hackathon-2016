App.controller('UpgradeController', function ($scope, GlobalSettingsFactory) {
    
    $scope.upgradeMouthSpeed = function () {
        if (GlobalSettingsFactory.mouthSpeed > 1) {
            GlobalSettingsFactory.mouthSpeed -= 1;
        }
    }

});