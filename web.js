var express = require("express");
var app = express();
app.use(express.logger());

app.use(express.static(__dirname + '/dist'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  console.log("__dirname: " + __dirname);
});