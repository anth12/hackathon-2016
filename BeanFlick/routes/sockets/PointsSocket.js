var userGameService = require('../../Services/UserGameService');

var pointsSocket = function (io) {
    
    
    io.on('connection', function (socket) {
        
        socket.on('interaction', function (request) {

            userGameService.update(request._id, request.action).then(function(userGame) {
                
                socket.emit('update', userGame);
            });
            
            //io.emit('', msg);
        });
        
        socket.on('disconnect', function () {

        });
    });
}

module.exports = pointsSocket;