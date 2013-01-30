var http = require('http');
var fs   = require('fs');
var path = require('path');
var rand = require('mersenne')

http.createServer(function(req, res) {
  fs.readdir('./kittys', function(err, files) {
    if (err) {
      console.error(err);
      return;
    }

    var i   = rand.rand(files.length);
    var img = files[i];
    var rs = fs.createReadStream('./kittys/' + img);
    rs.on('data', function(data) {
      res.write(data);
    });
    rs.on('end', function(data) {
      res.end(data);
    });
  });
}).listen(process.env.PORT || 3502);