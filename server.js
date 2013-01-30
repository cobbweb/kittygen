var http = require('http');
var fs   = require('fs');
var path = require('path');

http.createServer(function(req, res) {
  fs.readdir('./kittys', function(err, files) {
    if (err) {
      console.error(err);
      return;
    }

    var i   = Math.floor(Math.random() * files.length);
    var img = files[i];
    var rs = fs.createReadStream('./kittys/' + img);
    rs.on('data', function(data) {
      res.write(data);
    });
    rs.on('end', function(data) {
      res.end(data);
    });
  });
}).listen(3502);