const router = require('express').Router()
var mysql = require('mysql');
var fs = require('fs');
var data = "";


var con = mysql.createConnection({
  host: "localhost",
  user: "covid",
  password: "covid",
  database: "CovidMain"
});





con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT NuoviPos, DataRilievo  FROM AndamentoNazionale ORDER BY DataRilievo DESC LIMIT 10", function(err, result, fields){
   if(err) throw err;
   Object.keys(result).forEach(function(key){
    var row = result[key];
    data += "" + row.NuoviPos + " " + row.DataRilievo + "\n";
    console.log("dati presi dal DB");
   // console.log(fields);
    fs.writeFile("datiAndamentoNazionale.txt", data, (err) =>{
     if(err) throw err;
    })
   });
  });
});


router.get("/datiNazionaliNuoviPos", async (req,res) =>{
  var response = [];
  con.query("SELECT NuoviPos, DataRilievo  FROM AndamentoNazionale ORDER BY DataRilievo DESC LIMIT 10",function(err,result,fields){
    if(err) throw err;
    
    Object.keys(result).forEach(function(key){
      var row = result[key];
      console.log(row);

      var jsonValue = {"NuoviPositivi": row.NuoviPos,"Data": row.DataRilievo}
      response.push(jsonValue);

    });
    res.send(response);
    return;
  })
});

router.get("/riccio",async (req,res) => {
  res.send("Ciao riccio");
})


module.exports = router;