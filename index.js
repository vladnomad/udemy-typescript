"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Car = class Car {
    fuel = "50%";
    open;
    freeSpace;
    isOpen() {
        console.log(this.fuel);
        return this.open ? "Open" : "Closed";
    }
};
Car = __decorate([
    closeCar
], Car);
function closeCar(constructor) {
    // constructor.prototype.open = false
    return class extends constructor {
        open = false;
    };
}
const car = new Car();
console.log(car.isOpen());
// addFuel(closeCar(car)).isOpen()
/*
function addFuel(car: Car) {
    car.fuel = "100%"
    console.log("addFuel")
    return car
}
 */
// console.log(closeCar(myCar).isOpen())
// console.log(addFuel(closeCar(myCar)).isOpen())
