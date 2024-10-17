const http = require('http');
const handleRequest = require('./routes');

const server = http.createServer(handleRequest);

server.listen(8080);

// Add following code to your debugging configuration
// "restart": true,
// "runtimeExecutable": "nodemon",
// "console": "integratedTerminal"