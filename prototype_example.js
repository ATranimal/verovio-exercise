///////// MAKING A PROTOTYPE

function Car () {
    this.tires = 4;
    
    function drive() {
        console.log("vroom vroom");
    }

    Car.prototype.drive = drive;
}

var myCar = new Car();
myCar.drive();
var yourCar = Object.create(Car.prototype);
yourCar.drive();

console.log(Car.prototype);

Car.prototype.stop = function () { console.log("eek!!!") }
myCar.stop();

console.log(Car.prototype);

console.log("---------------------");

// ////////// MAKING A SINGLE JS OBJECT

var Van = {
    tires: 4,
    drive: function() {
        console.log("VROOM VROOM");
    }
}

// var myVan = new Van();
console.log(Van.tires);
Van.drive();

var myVan = Object.create(Van);
myVan.drive();


console.log("---------------------");

// //////////// INHERITANCE

function BigCar () {
    Car.call(this);
    this.rims = "HUGE";
    // this.drive = function() {console.log("VOROM VOROM")};
}
BigCar.prototype = Object.create(Car.prototype);
// BigCar.prototype.constructor = BigCar;

var myBigCar = new BigCar();

console.log(myBigCar.rims);
console.log(myBigCar.tires);
myBigCar.drive();

console.log(BigCar.prototype);