
var registerSockets = function (server) {

    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        console.log('connected');

        socket.on('chat message', function(msg) {
            io.emit('chat message', msg);
        });

        socket.on('disconnect', function() {

            console.log('disconnected');
        });
    });
}

module.exports = registerSockets;