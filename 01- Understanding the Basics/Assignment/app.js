const http = require('http');
const handleRequest = require('./routes');

const server = http.createServer(handleRequest);

// 1. Spin-up a NOde.js-driven server
server.listen(3000);