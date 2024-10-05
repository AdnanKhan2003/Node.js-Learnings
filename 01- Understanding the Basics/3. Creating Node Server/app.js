const http = require('http');
// ./ => for relative path
// just filename => for aboslute path

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);