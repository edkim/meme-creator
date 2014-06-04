var express = require("express");
var app = express();

app.get('/', function(req, res){
  res.send("<h1>hello world!</h1>");
});

app.listen(3000);
console.log("Your app is running on Port 3000!");