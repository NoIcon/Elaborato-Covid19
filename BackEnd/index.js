const express = require("express");
const app = express();


const dati_nazionali = require('./dati_nazionali');

app.use(express.json());
app.use("/",dati_nazionali);

app.listen(2122, () => console.log("Server in ascolto sulla porta 2122"));

