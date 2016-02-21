App.service('NotificationService', function () {
        

    var notificationService = {
        
        info: function(message) {
            
            notificationService._show('info', 'fa fa-info' message, timeout);
        },
        success: function (message) {
            
            notificationService._show('success', 'fa fa-trophy', message, timeout);
        },
        warn: function (message) {
            
            notificationService._show('warning', 'fa fa-exclamation-triangle', message, timeout);
        },
        error: function (message) {

            notificationService._show('error', 'fa fa-exclamation' message, timeout);
        },

        _show: function(type, icon, message, timeout) {
            timeout = timeout || 5000;

            var $container = $('.notification-wrapper');

            if ($container.length < 1) {

                $('body').prepend('<div class="notification-wrapper"></div>');
                $container = $('.notification-wrapper');
            }

            var id = parseInt(Math.random() * 10000);

            $container.prepend('<div class="notification ' + type + '" id="notification-' + id + '">' + 
                               '<div class="notification-icon">' + 'i<class="' + icon + '"></i>' + '</div'> +
                               '<div class="notification-body">' + '<p>' + message + '</p>' + '</div>');

            setInterval(function () {
                $('#notification-' + id).remove();
            }, timeout);
        }
    }

    return notificationService;
});