const url = require('url');

module.exports = 
{
    init: function (req, res) 
    {
        var pathname = url.parse(req.url, true).pathname;
            pathError = "";
        switch (pathname) 
            {
                case "/index.html":
                    res.writeHead(200, {'Content-Type': 'text/plain'});                 
                    break;
                case "/forside":
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write("Forside" + "\n" + '<ul>' +
                    '<li><a href="/forside">Forside</a></li>' + 
                    '<li><a href="/faq">FAQ</a></li>' + 
                    '<li><a href="/kontakt">Kontakt</a></li>' + '</ul>'
                    );
                    res.end();
                    break;
                case "/faq":
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write("FAQ"+ "\n" + '<ul>' +
                    '<li><a href="/forside">Forside</a></li>' + 
                    '<li><a href="/faq">FAQ</a></li>' + 
                    '<li><a href="/kontakt">Kontakt</a></li>' + '</ul>');
                    res.end();
                    break;
                case "/kontakt":
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write("Kontakt"+ "\n" + '<ul>' +
                    '<li><a href="/forside">Forside</a></li>' + 
                    '<li><a href="/faq">FAQ</a></li>' + 
                    '<li><a href="/kontakt">Kontakt</a></li>' + '</ul>');
                    res.end();
                    break;
                default:
                    res.statusCode = 404;
                    res.end("Page not found!");
                    pathError = " 404 Page not found";

                    break;
            }


        var fs = require('fs') /// Page Access Logging
            dato =new Date();
        var logger = 
            fs.createWriteStream('./logFiles/pageLoadLog.txt', 
                {
                    flags: 'a' // 'a' means appending (old data will be preserved)
                }
            ) 
        if (pathError != "")
            {
                logger.write("[" + dato + "] - " + pathname + pathError + "\n")// logs data error to log
            }
        else
            {
                logger.write("[" + dato + "] - " + pathname + "\n") //logs data patch to log 
            }
        
	}   
};