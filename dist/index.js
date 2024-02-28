"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
let ShippingContainer = class ShippingContainer {
    width;
    length;
    height;
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
        validate(this, "width", width);
        validate(this, "length", length);
        validate(this, "height", height);
    }
    calcArea(multiply) {
        return this.width * this.length * (multiply ? multiply : 1);
    }
    calcVolume(multiply) {
        return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
};
tslib_1.__decorate([
    IsInt(),
    Min(1),
    tslib_1.__metadata("design:type", Number)
], ShippingContainer.prototype, "width", void 0);
tslib_1.__decorate([
    IsInt(),
    Min(1),
    tslib_1.__metadata("design:type", Number)
], ShippingContainer.prototype, "length", void 0);
tslib_1.__decorate([
    IsInt(),
    Min(1),
    Max(8),
    tslib_1.__metadata("design:type", Number)
], ShippingContainer.prototype, "height", void 0);
tslib_1.__decorate([
    lastCalculation("calcArea"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Number)
], ShippingContainer.prototype, "calcArea", null);
tslib_1.__decorate([
    lastCalculation("calcVolume"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ShippingContainer.prototype, "calcVolume", null);
ShippingContainer = tslib_1.__decorate([
    addCreated,
    tslib_1.__metadata("design:paramtypes", [Number, Number, Number])
], ShippingContainer);
function addCreated(constructor) {
    return class extends constructor {
        created = new Date().toLocaleString();
    };
}
function lastCalculation(methodCalled) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            this.lastCalculation = `Last calculation ${methodCalled} was at ${new Date().toLocaleString()}`;
            return method.apply(this, args);
        };
    };
}
function IsInt() {
    return function (target, propertyKey) {
        Reflect.defineMetadata("IsInt", true, target, propertyKey);
    };
}
function Min(limit) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("Min", limit, target, propertyKey);
    };
}
function Max(limit) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("Max", limit, target, propertyKey);
    };
}
function validate(target, propertyKey, value) {
    const hasIsInt = Reflect.hasMetadata("IsInt", target, propertyKey);
    const valueIsNotInt = (!Number.isInteger(value) || value !== parseInt(value));
    if (hasIsInt && valueIsNotInt) {
        throw new Error(`Property '${propertyKey}' is not an integer`);
    }
    const hasMin = Reflect.hasMetadata("Min", target, propertyKey);
    const getMin = Reflect.getMetadata("Min", target, propertyKey);
    if (hasMin && value < getMin) {
        throw new Error(`Minimum value for property '${propertyKey}' is ${Reflect.getMetadata("Min", target, propertyKey)}`);
    }
    const hasMax = Reflect.hasMetadata("Max", target, propertyKey);
    const getMax = Reflect.getMetadata("Max", target, propertyKey);
    if (hasMax && value > getMax) {
        throw new Error(`Maximum value for property '${propertyKey}' is ${Reflect.getMetadata("Max", target, propertyKey)}`);
    }
}
function finalValidation(obj) {
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
        for (let key in obj) {
            validate(obj, key, obj[key]);
        }
    }
}
const container = new ShippingContainer(10, 100, 7);
console.log(container.lastCalculation);
console.log(container.created);
container.width = 10;
container.height = 5;
console.log(container.calcVolume());
console.log(container.lastCalculation);
setTimeout(() => {
    console.log(container.calcArea());
    console.log(container.lastCalculation);
}, 5000);
finalValidation(container);
