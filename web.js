var fs = require("fs");
var express = require('express');
var app = express();
var buf = new Buffer(256);
app.use(express.logger());
var file = fs.readFileSync('index.html');
var file_string = file.toString();
app.get('/', function(request, response) {
  response.send(file_string);
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
