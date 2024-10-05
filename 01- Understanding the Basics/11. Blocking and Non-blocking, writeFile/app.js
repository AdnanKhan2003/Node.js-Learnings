const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(req.url === '/message' && req.method === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        /*
        - We've this event driven architecture, where you tell node to do something, then it will
        go ahead and  offload that process to operating system which use multi-threading
        - Then continues with event loop and dispatches tiny actions to never block code execution
        - Comes back when operation is done by operating system
        */
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile("message.txt", message, () => {
                // 302: Redirection
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Server</title></head>');
    res.write('<body><h1>Hey Hi from a Node.js server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);