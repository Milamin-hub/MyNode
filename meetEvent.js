let event = require('events')
let util = require('util')

let name = "John"
let greet = "Hi" || "Hello"

let myEmit = new event.EventEmitter();

myEmit.on("start", function(text) {
    console.log(text)
});

myEmit.emit('start', `${greet}, ${name}`)

let Cars = function(model) {
    this.model = model;
}

util.inherits(Cars,event.EventEmitter);

let bmw = new Cars("BMW")
let nisan = new Cars("NISAN")
let volvo = new Cars("VOLVO")
let audi = new Cars("AUDI")

let cars = [bmw, nisan, volvo, audi]

cars.forEach(function(car) {
    car.on("speed", function(text) {
        console.log(car.model + " speed is: " + text)
    })
})

setTimeout(function() {
    bmw.emit("speed", "222 km")
    volvo.emit("speed", "145 km")
    audi.emit("speed", "290")
}, 2000)


