const http = require('http'); //Responsável por criar o server
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(
    (req,res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hey");
    }
);

server.listen(port, hostname, () => {
    console.log("Server started at http://localhost:3000");
});