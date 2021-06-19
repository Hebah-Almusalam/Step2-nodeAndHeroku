

var http = require('http'); 
var fs = require ('fs'); //file system
var url = require ('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
    var q = url.parse(req.url, true); //store requested url
    var filename = "." + q.pathname;//return pathname
    if (filename == './'){filename = './index'}//used to reroute user from a url to my url
    filename = filename + ".html"; //if user entered localhost:8080/index they'll be reroute to the file localhost:8080/index.html
    //fs.readFile('index.html', function(err, data){
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end("404 Not Found");
        }
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
    })
}).listen(PORT);
//.listen(8080);
//var http used to store built-in () in node.js. to transfer data over internet.
//node.js cancel the need of using server-side programming language 
//(like php) and use JS only. 
//respond header is number to show the mode. 200 means it's working fine.
//respond end contain page html.
//8080 is the port to run on. (NOTE: use this port only. other ones may be reserved
//for other applications and cause problem.)
//To run this page, first start the server by writing command: node hello.js) in git bash.
// second, write: (localhost:8080) on browser.