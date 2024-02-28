"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Car = class Car {
    fuel = "50%";
    lockStatus = true;
    freeSeats;
    isLocked(value) {
        return this.lockStatus ? `Locked ${value}` : "Unlocked";
    }
};
__decorate([
    checkFuelLevel
], Car.prototype, "isLocked", null);
Car = __decorate([
    toggleLockStatus(false),
    changeFuelLevel(95)
], Car);
function checkFuelLevel(target, context) {
    return function (...args) {
        console.log(this.fuel);
        return target.apply(this, args);
    };
}
function toggleLockStatus(status) {
    return (target, context) => {
        return class extends target {
            lockStatus = status;
        };
    };
}
function changeFuelLevel(level) {
    return (target, context) => {
        return class extends target {
            fuel = `${level}%`;
        };
    };
}
const car = new Car();
console.log(car.isLocked("5 minutes ago"));
