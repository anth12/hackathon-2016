﻿var express = require('express');
var path = require('path');
var vash = require('vash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


/*********************************************************
 *** Register the View Engine ****************************
 *********************************************************/
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'vash');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

/*********************************************************
 *** DataStore Config ************************************
 *********************************************************/
require('./DataStoreConfig')(app);

/*********************************************************
 *** Register the Routes *********************************
 *********************************************************/
require('./RouteConfig')(app);



//#region Error handling 

/*********************************************************
 *** 404 handler *****************************************
 *********************************************************/
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/*********************************************************
 *** error handlers **************************************
 *********************************************************/

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//#endregion

module.exports = app;
