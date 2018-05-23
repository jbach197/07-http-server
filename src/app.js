'use strict';

const http = require('http');

const app = http.createServer((req, res) => {

    if(req.method === "GET"){
        fs.readFile('cowsay.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.write(`<!DOCTYPE html> <html><body><h1>${req.url.query.you}</h1></body></html>`);
            res.end();
            return;
            });
    }
});

module.exports = {
    start:(port, callback) => app.listen(port, callback),
    stop:(callback) => app.close(callback)
};

