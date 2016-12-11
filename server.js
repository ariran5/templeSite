var http = require('http');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
  if (req.url.indexOf('/templates/') === 0) {
    setTimeout(function() {
      file.serve(req, res);
    }, 100);
  } else {
    file.serve(req, res);
  }
}

http.createServer(accept).listen(8080);

console.log('Server running on port 8080');
