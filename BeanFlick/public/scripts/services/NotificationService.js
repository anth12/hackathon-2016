App.service('NotificationService', function () {
        

    var notificationService = {
        
        info: function(message) {
            
            notificationService._show('info', message, timeout);
        },
        success: function (message) {
            
            notificationService._show('success', message, timeout);
        },
        warn: function (message) {
            
            notificationService._show('warn', message, timeout);
        },
        error: function (message) {

            notificationService._show('error', message, timeout);
        },

        _show: function(type, message, timeout) {
            timeout = timeout || 5000;

            $container = $('.notification-container');

            if ($container.length < 1) {

                $('body').prepend('<div class="notification-container"></div>');
                $container = $('.notification-container');
            }

            var id = parseInt(Math.random() * 10000);

            $container.prepend('<div class="notification ' + type + '" id="notification-' + id + '">' + 
                                    message + 
                                '</div>');

            setInterval(function () {
                $('#notification-' + id).remove();
            }, timeout);
        }
    }

    return notificationService;
});