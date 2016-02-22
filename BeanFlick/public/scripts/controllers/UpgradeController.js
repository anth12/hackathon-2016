App.controller('UpgradeController', function ($scope, GlobalSettingsFactory) {
    
    $scope.upgradeMouthSpeed = function () {
        if (GlobalSettingsFactory.mouthSpeed > 0) {
            GlobalSettingsFactory.mouthSpeed = GlobalSettingsFactory.mouthSpeed / 1.1;
        }
    }

});