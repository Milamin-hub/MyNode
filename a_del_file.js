let fs = require("fs")

fs.unlink("text.txt", function (arr, data) {})

fs.unlink("somefile.txt", function (arr, data) {})


fs.unlink("./new/som.html", function() {})
fs.rmdir("new", function() {})