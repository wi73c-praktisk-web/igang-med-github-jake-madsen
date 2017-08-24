const   restify = require('restify'),
        http = require('http'),
        hostname = '127.0.0.1',
        port = 3000,
        router = require('./controllers/routesController.js');

http.createServer(function (req, response) 
    {
        router.init(req, response);
    }
).listen(port, hostname)
{

};

console.log(`serveren kører på http://${hostname}:${port}/`);
