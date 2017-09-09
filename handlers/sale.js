var Sale = require("../schemas").Sale;

module.exports = function(req, res){

var newSale = new Sale(req.body);

newSale.save(function(err,docs){
    if (!err) {  
         res.json("Sale INSERT complete: " + docs);
       } else {
          res.sendStatus("Kill me NOW!!!");
       }
 });
}