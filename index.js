let fs = require("fs")




let http = require("http")

let server = http.createServer(function(req, res) {
    console.log("url страниццы: " + req.url)
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
    let mRShot = fs.createReadStream(__dirname + "/text.txt", "utf-8")

    mRShot.pipe(res)
}).listen(3000, "127.0.0.1")

console.log("start localhost:3000")