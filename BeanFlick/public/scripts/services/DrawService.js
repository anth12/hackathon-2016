App.service('DrawService', ['CanvasFactory', function (CanvasFactory) {
        
    var animationLoop;    

    this.draw = function () {
        startAnimation()
    }
        
        
    this.clear = function () {

    }
        
    function startAnimation() {
        animationLoop = window.requestAnimationFrame(startAnimation)
    }

}])