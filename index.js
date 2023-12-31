const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'),'utf8',(err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        })
    }  else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'),'utf8',(err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Not Found');
    }
})


const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});