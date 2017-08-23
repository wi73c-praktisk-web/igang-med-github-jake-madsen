///////// Server Executable //////////

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server =
http.createServer(function(req, respond)
    {
        respond.statusCode = 200;
        respond.setHeader('Content-Type', 'text/html');
        respond.write('<h1>Server is up and running!</h1>');
        respond.end();
    }
);

server.listen(port, hostname, function()
    {
        console.log(`serveren kører på http://${hostname}:${port}/`);
    }
);