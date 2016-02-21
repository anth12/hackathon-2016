
var registerRoutes = function (app) {

    app.use('/', require('../routes/index'));

    app.use('/api/user', require('../routes/api/User'));
    app.use('/api/game', require('../routes/api/Game'));
    app.use('/api/highscore', require('../routes/api/Highscore'));

}

module.exports = registerRoutes;