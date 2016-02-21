App.factory('CanvasFactory', function () {

    var canvasElement = document.getElementById('canvas');
    var canvasContext = canvasElement.getContext("2d");
    var height = canvasElement.offsetHeight;
    var width = canvasElement.offsetWidth;

    return {
        canvasElement: canvasElement,
        canvasContext: canvasContext,
        height: height,
        width: width
    };
});