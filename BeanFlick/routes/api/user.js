var express = require('express');
var router = express.Router();
var userService = require('../../Services/UserService');

/* POST create */
router.post('/create', function (req, res) {

    var user = userService.createUser().then(function (user) {

        userService.createSession(user.Id, req.connection.remoteAddress).then(function (session) {

            user.Sessions.push(session);

            res.send(user);
        });
    });
});

/* GET session */
router.get('/*', function (req, res) {
    var id = req.params[0];

    userService.getBySession(id).then(function(user) {
        
        res.send(user);
    });
});

module.exports = router;