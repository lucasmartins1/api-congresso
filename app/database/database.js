var fs = require('fs');
var mysql = require('mysql');

var credentials = JSON.parse(fs.readFileSync(__dirname+'/db.json'));

var connection = mysql.createConnection(credentials);

module.exports = connection;