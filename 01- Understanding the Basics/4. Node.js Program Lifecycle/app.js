const http = require('http');

http.createServer((req, res) => {
    console.log(req);

    // It will hard exit our event loop
    process.exit();
}).listen(3000);