var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('homepage.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080, '0.0.0.0', function() {
    console.log('Listening to port 8080 . . .')
})