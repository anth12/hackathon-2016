App.controller('UploadController', function ($scope, $element, NotificationService, CurrentGameFactory, GameService) {

    $scope.Enabled = false;
    
    $scope.MouthLeft = { X: 175, Y: 335 };
    $scope.MouthRight = { X: 175, Y: 335 };

    $scope.toggle = function(enabled) {
        $scope.Enabled = enabled;
    }

    $scope.fileNameChanged = function(event) {

        var reader = new FileReader();
        reader.onload = function () {

            $scope.Image = reader.result;
            $scope.$apply();
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    var pressedMarker = null;
    $('.upload-preview').on('mousedown', '.marker', function(event) {
        pressedMarker = $(event.target).data('id');
        
        document.addEventListener("mousemove" , $scope.mouseMove, false);
        
    });

    $scope.mouseMove = function (event) {
        var parentPosition = $('.upload-preview').position();

        $scope[pressedMarker].X = event.pageX;// - parentPosition.left;
        $scope[pressedMarker].Y = event.pageY;// - parentPosition.top;
        var $elm = $('[data-id="' + pressedMarker + '"]');

        $elm.css('left', $scope[pressedMarker].X + "px");
        $elm.css('top', $scope[pressedMarker].Y + "px");
        
        document.addEventListener("mouseup" , $scope.eleMouseUp, false);
    }

    $scope.eleMouseUp = function (event) {
        document.removeEventListener("mousemove" , $scope.mouseMove , false);
        document.removeEventListener("mouseup" , $scope.eleMouseUp , false);
    }
});