var Data = require("../schemas").Data;

module.exports = function(req, res){
  Data.find({}, function(err, docs) {
    console.log("Current Data...");
    res.json(docs);
 }); 
}