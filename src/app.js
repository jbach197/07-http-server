'use strict';

const http = require('http');

const requestParser = require('./lib/parse-request');
const bodyParser = require('./lib/parse-body');

const app = http.createServer((req, res) => {

    if(req.method === "GET"){
    fs.readFile('cowsay.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(`<!DOCTYPE html> <html><body><h1>${req.url.query}</h1></body></html>`);
        res.end();
        return;
    });

    else if(req.method === 'POST'){
        boddParse.execute(req)
        .then((req) => {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.write(JSON.stringify(req.body));
            res.end();
            return;
        })
        .catch((err) => {
            let errorObject = {error:err};
            res.setHeader('Content-Type', 'text/json');
            res.statusCode = 500;
            res.statusMessage = 'Server Error';
            res.write(JSON.stringify(errorObject));
            res.end();
            return;
        }

        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(JSON.stringify(req.body));
        res.end();
        return;
    })
    }
});

module.exports = {
    start:(port, callback) => app.listen(port, callback),
    stop:(callback) => app.close(callback)
};

