#!/usr/bin/env node
var app = require('./App_Start/ApplicationStart');

app.set('port', 80);

var server = app.listen(app.get('port'), function () {
    console.log('Env: ' + app.get('env'));
});

require('../App_Start/SocketConfig')(server);