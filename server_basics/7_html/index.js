var fs = require('fs');
var http = require('http')
http.createServer(function handler(req, res) {
        fs.readFile(__dirname + '/index.html', function (err, data) { //read html file
            if (err) {
                res.writeHead(500);
                return res.end('Error loading file');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
}).listen(8088);
