var BMW = (function () {
    function BMW(color, engineCapacity, fuel, seatingCapacity) {
        this.color = color;
        this.engineCapacity = engineCapacity;
        this.fuel = fuel;
        this.seatingCapacity = seatingCapacity;
    }
    BMW.prototype.specification = function () {
        var specification = "\n                                   Color:" + this.color + ",\n                                   EnginerCapacity:" + this.engineCapacity + ",\n                                   fuel:" + this.fuel + ",\n                                   SeatingCapacity:" + this.seatingCapacity + ",\n                                   Has AirBags:" + this.hasAirBags() + ",\n                                   Has Camera:" +  + "\n        \n        ";
    };
    BMW.prototype.hasAirBags = function () {
        return null;
    };
    BMW.prototype.hasCamera = function () {
        return true;
    };
    return BMW;
}());
var cer1 = new BMW('white', '3000CC', 'Diesel', 4);
var carSpec = car1.spacification();
console.log(carSpec);
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
// Implement an interface and methods and variables of interface 
