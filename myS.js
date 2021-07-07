let fs = require("fs")



let http = require("http")

let server = http.createServer(function(req, res) {
    console.log("url страниццы: " + req.url)
    // if "aplicatin/json"-> downaload file from html site
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
    let obj = {
        model: "bmw",
        speed: 267.1,
        wheels: 4
    }

    res.end(JSON.stringify(obj))
}).listen(3000, "127.0.0.1")

console.log("start localhost:3000")