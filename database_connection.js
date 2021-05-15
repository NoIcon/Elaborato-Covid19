var mysql = require('mysql');

var con = mysql.createConnection({
  host: "scann3d.it",
  user: "root",
  password: "simo2002"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});