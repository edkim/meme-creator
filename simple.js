var http = require('http');
http.createServer(function (req, res) {
  res.write('Your node.js server is running on localhost:3000');
  res.end();
}).listen(3000);//step 3) listen for a request on port 3000