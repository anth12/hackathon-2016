
var registerRoutes = function (app) {

    app.use('/', require('../routes/index'));
    app.use('/users', require('../routes/users'));

    app.use('/api/user', require('../routes/api/user'));

}

module.exports = registerRoutes;