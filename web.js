var fs = require("fs");
var express = require('express');
var app = express();
var buf = new Buffer(256);
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
  var file = fs.readFileSync('index.html');
  buf.write(file,"utf-8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
