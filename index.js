var express = require('express');
var bodyParser = require('body-parser');
// This is wehre the EZBake Service itself is created using Express
//  - set
var Server = require('./server');

var EZBake = function(){
  var app;
  var users = {};
  self = this;

  self.startServer = function(){
     console.log("EZBake: popping into the oven");
    app.listen(self.port, self.ipaddress, function() {
      var url = self.ipaddress || "http://localhost:8000";
      var now = new Date();
      console.log("EZBake: baking... since " + now + "\t@ " + url);
    });
  }

  self.loadAdminUsers = function(admin_users){
    // console.log("EZBake: adding sou chefs");
    users = admin_users;
  }

  self.loadEndpoints = function(endpoints){
    console.log("EZBake: gathering ingredients");
  // create express app
    app = module.exports = express();
  
  //set up bodyParser for POSTing
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));    

    // set up enviroment and routing
    require('./environment.js')(self, app, express);
    require('./routing.js')(app,endpoints, users);
    
    console.log("EZBake: mixed ingredients. ready to bake.");
  }
}

module.exports = EZBake;