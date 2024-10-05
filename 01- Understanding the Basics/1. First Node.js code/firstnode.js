const fs = require('fs');

console.log("Hello world in Node.js");
fs.writeFileSync('hello.txt', "This is a hello file written in node.js");