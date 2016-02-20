App.factory('CanvasFactory', function () {
    
    var canvasElement = document.getElementById('canvas');
    var canvasContext = canvasElement.getContext("2d");
    var height = canvasElement.offsetHeight;
    var width = canvasElement.offsetWidth;
    var offsetTop = canvasElement.offsetTop;
    var offsetLeft = canvasElement.offsetLeft

    return {
        canvasElement: canvasElement,
        canvasContext: canvasContext,
        height: height,
        width: width,
        offsetTop: offsetTop,
        offsetLeft: offsetLeft
    }
})