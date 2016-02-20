var express = require('express');
var router = express.Router();
var userService = require('../../Services/UserService');

/* POST create */
router.post('/create', function (req, res) {

    var user = userService.createUser();
    res.send(user);
});

/* GET create */
router.get('/*', function (req, res) {
    var id = req.params[0];

    userService.get(id).then(function(user) {
        
        res.send(user);
    });
});

module.exports = router;