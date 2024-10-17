const http = require('http');
const handleRequest = require('./routes');

/*
Error Type: Syntax Error => Typo error in this case
Solution: write 'const' instead of 'const'
*/
// cons server = http.createServer(handleRequest);
const server = http.createServer(handleRequest);

// 1. Spin-up a NOde.js-driven server
server.listen(3000);