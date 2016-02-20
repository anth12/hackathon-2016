App.factory('InteractionFactory', ['GlobalSettingsService', function (GlobalSettingsService) {
        
        var x = GlobalSettingsService.globalSettings().throwableStartPosition.x;
        var y = GlobalSettingsService.globalSettings().throwableStartPosition.y;
        

    return {
        x: x,
        y: y
    };
    
}])