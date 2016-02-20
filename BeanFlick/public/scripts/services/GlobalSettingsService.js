App.service('GlobalSettingsService', function () {
    


    this.throwableSettings = function () {

    }

    this.launcherSettings = function () {

    }

    this.globalSettings = function () {
        return {
            throwableStartPosition: {
                x: 400,
                y: 600
            },
            friction: 1
        }
    }

    })