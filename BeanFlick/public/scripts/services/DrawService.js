App.service('DrawService', ['CanvasFactory', function (CanvasFactory) {

    this.draw = function () {
        console.log(CanvasFactory.canvasElement);
    }


    this.clear = function () {

    }

}])