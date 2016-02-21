
var registerSockets = function (server) {
    
    var pointIo = require('socket.io')(server).of('points');
    require('../routes/sockets/PointsSocket')(pointIo);

}

module.exports = registerSockets;