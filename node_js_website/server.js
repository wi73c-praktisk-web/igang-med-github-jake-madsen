const   restify = require('restify'),
        http = require('http'),
        hostname = '127.0.0.1',
        port = 3000,
        router = require('./controllers/routesController.js');
var     serveStatic = require('serve-static-restify')
        // finalhandler = require('finalhandler');

// var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})

http.createServer(function (req, response) 
    {
        router.init(req, response);
        // serve(req, response, done)
        serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})
    }
).listen(port, hostname)
{

};


console.log(`serveren kører på http://${hostname}:${port}/`);
