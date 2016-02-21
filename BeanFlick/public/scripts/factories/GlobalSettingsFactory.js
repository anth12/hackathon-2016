App.factory('GlobalSettingsFactory', function () {
    
    return {
        mouthData: {
            mouthLeft: {},
            mouthRight: {},
            width: 200,
            height: 100
        },
        
        mouthPositionY: 400,
        
        mouthSpeed: 2,
        
        mouthClosed: false,
        
        throwableSize: {
            width: 50
        },
        
        throwAreaHeight: 200,
        
        throwableStartPosition: {
            x: 450,
            y: 800
        },
        
        friction: 4
    }
    
})