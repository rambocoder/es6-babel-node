import http from 'http';

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, 'localhost');

console.log('Listening on http://localhost:1337');