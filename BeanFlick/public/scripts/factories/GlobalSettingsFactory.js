App.factory('GlobalSettingsFactory', function () {
    
    return {
        mouthArea: {
            x: 300,
            y: 100,
            width: 200,
            height: 100
        },
        
        mouthSpeed: 1,
        
        mouthClosed: false,
        
        throwableSize: {
            width: 50
        },
        
        throwableStartPosition: {
            x: 400,
            y: 500
        },

        friction: 4
    }
    
})