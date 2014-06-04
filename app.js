var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send("hello world!")
});

app.listen(3000);
console.log("Your app is running on Port 3000!");