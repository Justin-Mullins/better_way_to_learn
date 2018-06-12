var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
  fs.readFile("template.html", function(err, data) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(data);
    response.end();
  });
  fs.readFile("template.css", function(err, data) {
    response.writeHead(200, {"Content-Type": "text/css"});
    response.write(data);
    response.end();
  });
}).listen(8888);
