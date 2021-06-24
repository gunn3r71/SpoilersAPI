const http = require('http');
const express = require('express');
const spoilerRoute = require('./routes/spoiler');
const app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.set('port',port);

app.use('/api', spoilerRoute);

//registrando um middleware
app.use((req,res, next) => {
    res.status(404).json({message:'I don\'t have that =('});
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});