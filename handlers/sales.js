var Sale = require("../schemas").Sale;

module.exports = function(req, res){
  var yourname = req.params.yourname;
  Sale.find({}, function(err, docs) {
    console.log("yumpin yimminy!");
    res.json(docs);
 }); 
}