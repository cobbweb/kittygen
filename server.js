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
    fs.createReadStream('./kittys/' + img).pipe(res);
  });
}).listen(process.env.PORT || 3502);