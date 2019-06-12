
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var trackingSchema = new Schema ({
    source: String,
    description: String,
    timestamp: String
});

var Tracking = mongoose.model('Tracking', trackingSchema );

module.exports = Tracking;