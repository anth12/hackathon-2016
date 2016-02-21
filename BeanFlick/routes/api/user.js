var express = require('express');
var router = express.Router();
var userService = require('../../Services/UserService');

/* POST create */
router.post('/create', function (req, res) {

    userService.createUser().then(function (user) {

        userService.createSession(user.Id, req.connection.remoteAddress).then(function (session) {

            user.Sessions.push(session);

            res.send(user);
        });
    });
});

/* GET session */
router.get('/:id', function (req, res) {
    var id = req.params.id;

    userService.getBySession(id).then(function(user) {
        
        res.send(user);
    });
});

module.exports = router;