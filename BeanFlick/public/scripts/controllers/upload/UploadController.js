App.controller('UploadController', function ($scope, $element, NotificationService, CurrentGameFactory, GameService) {

    $scope.Enabled = false;
    
    $scope.MouthLeft = { X: 165, Y: 80 };
    $scope.MouthRight = { X: 200, Y: 80 };

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

    $('.upload-form form').on('submit', function(event) {

        if ($scope.Image == null) {
            NotificationService.warning('Please specify the Image you would like to use');
            return event.preventDefault();
        }

        if ($scope.Name == null || $scope.Name == '') {
            NotificationService.warning('Please give your game a name');
            return event.preventDefault();
        }

    });

    var $elm = $('[data-id="MouthLeft"]');
    $elm.css('left', $scope.MouthLeft.X + "px");
    $elm.css('top', $scope.MouthLeft.Y + "px");
    
    $elm = $('[data-id="MouthRight"]');
    $elm.css('left', $scope.MouthRight.X + "px");
    $elm.css('top', $scope.MouthRight.Y + "px");

    var pressedMarker = null;
    $('.upload-preview').on('mousedown', '.marker', function(event) {
        pressedMarker = $(event.target).data('id');
        
        document.addEventListener("mousemove" , $scope.mouseMove, false);
        
    });
    

    $scope.mouseMove = function (event) {
        var parentPosition = $('.upload-preview').position();

        $scope[pressedMarker].X = event.pageX - parentPosition.left;
        $scope[pressedMarker].Y = event.pageY - parentPosition.top;
        var $elm = $('[data-id="' + pressedMarker + '"]');

        $elm.css('left', $scope[pressedMarker].X + "px");
        $elm.css('top', $scope[pressedMarker].Y + "px");
        
        document.addEventListener("mouseup" , $scope.eleMouseUp, false);
    }

    $scope.eleMouseUp = function (event) {
        document.removeEventListener("mousemove" , $scope.mouseMove , false);
        document.removeEventListener("mouseup" , $scope.eleMouseUp , false);

        $scope.$apply();
    }
});