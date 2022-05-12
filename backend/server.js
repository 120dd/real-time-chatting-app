const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const HTTP_PORT = 8080;
const HTTPS_PORT = 8443;
const options = {
    key: fs.readFileSync('./rootca.key') ,
    cert: fs.readFileSync('./rootca.crt')
};

const app = express(); // Default route for server status
app.get('/', (req, res) => {
    res.json({ message: `Server is running on port ${req.secure ? HTTPS_PORT : HTTP_PORT}` });
});

// Create an HTTP server.
http.createServer(app).listen(HTTP_PORT,() => {
    console.log(`this app listening on port ${HTTP_PORT}`)
});
// Create an HTTPS server.
https.createServer(options, app).listen(HTTPS_PORT,() => {
    console.log(`this app listening on port ${HTTPS_PORT}`)
});
