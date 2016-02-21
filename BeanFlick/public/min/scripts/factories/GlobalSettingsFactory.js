App.factory('GlobalSettingsFactory', function () {

    return {
        mouthArea: {
            x: 300,
            y: 100,
            width: 200,
            height: 100
        },

        mouthSpeed: 10,

        mouthClosed: false,

        throwableSize: {
            width: 50
        },

        throwAreaHeight: 200,

        throwableStartPosition: {
            x: 400,
            y: 750
        },

        friction: 4
    };
});