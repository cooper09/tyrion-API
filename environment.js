module.exports = function(self, app, express){

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://cooper:cooper@ds063240.mongolab.com:63240/polydata', function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mongoose connect - Success!!!");
        }
    }); 

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
      next();
    }); 

    
   /* self.ipaddress = process.env.OPENSHIFT_NODEJS_IP; */
    self.port      = process.env.PORT || 8080;
  /*  if (typeof self.ipaddress === "undefined") {
        console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
        self.ipaddress = "127.0.0.1";
    }; */
    
    console.log("our port: ", self.port );
//    self.port = 8000;
};