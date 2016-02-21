
var registerSockets = function (server) {
    
    require('../routes/sockets/PointsSocket')(server);

}

module.exports = registerSockets;