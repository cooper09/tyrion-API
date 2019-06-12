
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new Schema ({
    dataId: String,
    title: String,
    description: String,
    timestamp: String
});

var Data = mongoose.model('Data', dataSchema );

module.exports = Data;