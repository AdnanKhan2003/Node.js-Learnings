const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Server</title></head>');
    res.write('<body><h1>Hey Hi from a Node.js server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);