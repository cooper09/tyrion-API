
var Tracking = require("../schemas").Tracking;

module.exports = function(req, res){
  var yourname = req.params.yourname;
  Tracking.find({}, function(err, docs) {
    console.log("yumpin yimminy!");
    res.json(docs);
 }); 
}