const http = require("http");
const { PORT = 8000 } = process.env;

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

function onRequest(req, res) {
    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (req.url === "/cars") {
        fs.readFile("./public/cari-mobil.html", "UTF-8", function (err, html) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        });
    } else if (req.url === "/get-cars") {
        var dataPath = path.join(__dirname, '../data', '/cars.json');
        var fileStream = fs.createReadStream(dataPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "application/json" });
        fileStream.pipe(res);
    } else if (req.url.match("\.css$")) {
        var cssPath = path.join(__dirname, '../public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
    } else if (req.url.match("\.png$")) {
        var imagePath = path.join(__dirname, '../public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    } else if (req.url.match("\.jpg$")) {
        var imagePath = path.join(__dirname, '../public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    } else if (req.url.match("\.js$")) {
        var imagePath = path.join(__dirname, '../public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fileStream.pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }
}

const server = http.createServer(onRequest);

server.listen(PORT, "127.0.0.1", () => {
    console.log("Server sudah berjalan, silahkan buka http://127.0.0.1:%d", PORT);
});