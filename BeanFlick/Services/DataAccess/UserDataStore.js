var Datastore = require('nedb');
var path = require('path');


var userDataStore = new Datastore({
    filename: path.join(__dirname + '../../../App_Data/users.db'),
    autoload: true
});

//userDataStore.ensureIndex({ fieldName: 'Id', unique: true });

module.exports = userDataStore;