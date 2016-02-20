var express = require('express');
var router = express.Router();
var userService = require('../../Services/UserService');

/* GET */
router.get('/*', function (req, res) {
    var id = req.params[0];

    userService.get(id).then(function(user) {
        
        res.send(user);
    });
});

module.exports = router;