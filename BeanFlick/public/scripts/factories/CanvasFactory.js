App.factory('CanvasFactory', function () {
    
    var canvasElement = document.getElementById('canvas');
    var canvasContext = canvasElement.getContext("2d");
    

    return {
        canvasElement: canvasElement,
        canvasContext: canvasContext
    }
})