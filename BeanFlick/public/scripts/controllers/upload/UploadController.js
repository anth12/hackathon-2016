App.controller('UploadController', function ($scope, $element, NotificationService, CurrentGameFactory, GameService) {

    $scope.Enabled = false;
    
    $scope.MouthLeft = { X: 165, Y: 335 };
    $scope.MouthRight = { X: 180, Y: 335 };

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
    
    $scope.submit = function() {
        
        if ($scope.Image == null) {
            NotificationService.warning('Please specify the Image you would like to use');
            return;
        }

        if ($scope.Name == null || $scope.Name == '') {
            NotificationService.warning('Please give your game a name');
            return;
        }

        var formData = new FormData($('.upload-form form')[0]);
        
        $.ajax({
            type: 'POST',
            url: '/api/custom/create',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {

                location.href = data.UrlCode;
            },
            error: function (data) {

                NotificationService.error('Failed to create custom game');
            }
        });
    }

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
    }
});