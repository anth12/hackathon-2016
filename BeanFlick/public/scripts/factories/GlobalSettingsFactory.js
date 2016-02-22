App.factory('GlobalSettingsFactory', function (CanvasFactory) {
    
    var throwableStartPositionY = window.innerHeight - 50;

    return {
        mouthData: {
            mouthLeft: {},
            mouthRight: {},
            height: 100
        },
        
        mouthPositionY: 400,
        
        mouthSpeed: 1,
        
        mouthClosed: false,
        
        throwableImageWidth: 50,
        
        faceImageWidth: 450,

        throwAreaHeight: 200,
        
        throwableStartPosition: {
            x: 450,
            y: throwableStartPositionY
        },
        
        friction: 2
    }
    
})