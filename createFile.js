let fs = require("fs")

const err = 404
const con = 200


// создать папку
fs.mkdirSync("few")
//удалить папку
fs.rmdirSync("few")

fs.mkdir("new", function() {
    fs.writeFile("./new/som.html", "GON, long, dong", function() {
        console.log(con)
    });
});

