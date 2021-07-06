let fs = require("fs")

fs.writeFile("text.txt", "hi, how are you?", function (arr, data) {})

fs.readFile("text.txt", "utf8", function(arr, data) {
    console.log(data)
})



let mas = "like rock\n";

fs.writeFile("somefile.txt", mas, function (arr, data) {})

fs.readFile("somefile.txt", "utf8", function (arr, data) {
    console.log(data)
})



