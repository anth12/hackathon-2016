App.factory('GlobalSettingsFactory', function () {
    
    return {
        mouthData: {
            mouthLeft: {},
            mouthRight: {},
            width: 200,
            height: 100
        },
        
        mouthPositionY: 400,
        
        mouthSpeed: 1,
        
        mouthClosed: false,
        
        throwableImageWidth: 50,
        
        faceImageWidth: 350,

        throwAreaHeight: 200,
        
        throwableStartPosition: {
            x: 450,
            y: 800
        },
        
        friction: 2
    }
    
})