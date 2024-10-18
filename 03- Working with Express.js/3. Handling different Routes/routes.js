const handleRequest = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.writeHeader(200, {
            'Content-Type': 'text/html'
        })
        res.write('<html><head><title>Hey User</title></head><body><ul><h1>Hello User</h1><li>User 1</li></ul><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form></body></html>');
        return res.end();
    }
/* 
Forgot to add curly brace, so syntax error
 */
// }

    if(url === '/users'){
        res.writeHeader(200, {
            'Content-Type': 'text/html'
        });
        res.write('<html>');
        res.write('<head>');
        res.write('<title>');
        res.write('Hello Users');
        res.write('</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>');
        res.write('User 1');
        res.write('</li>');
        res.write('<li>');
        res.write('User 2');
        res.write('</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        })
    }
    res.writeHeader(402, {
        'Content-Type': 'text/html'
    })
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('Invalid Url');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>');
    res.write('INVALID URL');
    res.write('</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}

module.exports = handleRequest;