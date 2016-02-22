App.service('NotificationService', function () {
        

    var notificationService = {
        
        info: function(message, timeout) {
            
            notificationService._show('info', 'fa fa-info', message, timeout);
        },
        achievement: function (message, description) {
            
            notificationService._show('success', 'fa fa-trophy', message, null, description);
        },
        success: function (message, timeout) {
            
            notificationService._show('success', 'fa fa-trophy', message, timeout);
        },
        warning: function (message, timeout) {
            
            notificationService._show('warning', 'fa fa-exclamation-triangle', message, timeout);
        },
        error: function (message, timeout) {

            notificationService._show('error', 'fa fa-exclamation', message, timeout);
        },

        _show: function(type, icon, message, timeout, description) {
            timeout = timeout || 5000;

            var $container = $('.notification-wrapper');

            if ($container.length < 1) {

                $('body').prepend('<div class="notification-wrapper"></div>');
                $container = $('.notification-wrapper');
            }

            var id = parseInt(Math.random() * 10000);

            $container.prepend('<div class="notification ' + type + '" id="notification-' + id + '"></div>');

            var body = description != null 
                ? '<div class="notification-body"><h3>' + message + '</h3><p>' + description + '</p></div>' 
                : '<div class="notification-body"><p>' + message + '</p></div>';

            $('#notification-' + id).html('<div class="notification-icon">' +
                                                '<i class="' + icon + '"></i></div>' +
                                                 body +
                                            '</div>');
            
            function remove() {
                $('#notification-' + id).addClass('is-hidden');
                setTimeout(function () {
                    $('#notification-' + id).remove();
                }, 500);
            }

            $('#notification-' + id).one('click', remove);
            setTimeout(remove, timeout);
        }
    }

    return notificationService;
});