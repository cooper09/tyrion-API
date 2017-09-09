var package_json = require('../package');

module.exports = function(req, res){
  res.send(package_json.name + ' | version: ' + package_json.version);
}