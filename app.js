
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://cooper:cooper@ds063240.mongolab.com:63240/polydata', function (error) {
    if (error) {
        console.log("Mongoose error - No MongoDB connection");
    } else {
        console.log("Mongoose connect - Success!!!");
    }
}); 

global.mongoose = mongoose; */

var EZBake = require("./index");

var ez = new EZBake();
ez.loadEndpoints(require("./endpoints"))
ez.startServer()