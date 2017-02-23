var http = require('http')


var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<p>Progressive Web Apps</p>");
    process.stdout.write("Client " + re)
    res.end();
})


server.listen(3000)