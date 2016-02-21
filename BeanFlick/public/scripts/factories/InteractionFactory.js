App.factory('InteractionFactory', function (GlobalSettingsFactory) {
    
    var x = GlobalSettingsFactory.throwableStartPosition.x;
    var y = GlobalSettingsFactory.throwableStartPosition.y;
    
    
    return {
        x: x,
        y: y
    };
    
})