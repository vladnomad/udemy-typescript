"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
let Car = (() => {
    let _classDecorators = [toggleLockStatus(false), changeFuelLevel(95)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _freeSeats_decorators;
    let _freeSeats_initializers = [];
    let _isLocked_decorators;
    var Car = class {
        static { _classThis = this; }
        constructor() {
            this.fuel = (__runInitializers(this, _instanceExtraInitializers), "50%");
            this.lockStatus = true;
            this.freeSeats = __runInitializers(this, _freeSeats_initializers, 3);
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _freeSeats_decorators = [checkNumberOfSeats(4)];
            _isLocked_decorators = [checkFuelLevel];
            __esDecorate(this, null, _isLocked_decorators, { kind: "method", name: "isLocked", static: false, private: false, access: { has: obj => "isLocked" in obj, get: obj => obj.isLocked }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _freeSeats_decorators, { kind: "field", name: "freeSeats", static: false, private: false, access: { has: obj => "freeSeats" in obj, get: obj => obj.freeSeats, set: (obj, value) => { obj.freeSeats = value; } }, metadata: _metadata }, _freeSeats_initializers, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Car = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        isLocked(value) {
            return this.lockStatus ? `Locked ${value}` : "Unlocked";
        }
    };
    return Car = _classThis;
})();
function checkNumberOfSeats(limit) {
    return function (target, context) {
        return function (newAmount) {
            if (newAmount >= 1 && newAmount <= limit) {
                return newAmount;
            }
            else {
                throw new Error(`Maximum number of seats is ${limit}, Minimum number is 1.`);
            }
        };
    };
}
function checkFuelLevel(target, context) {
    return function (...args) {
        console.log(`${String(context.name)} initiated`);
        return target.apply(this, args);
    };
}
function toggleLockStatus(status) {
    return (target, context) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.lockStatus = status;
            }
        };
    };
}
function changeFuelLevel(level) {
    return (target, context) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${level}%`;
            }
        };
    };
}
const car = new Car();
console.log(car.isLocked("5 minutes ago"));
car.freeSeats = -1;
console.log(car);
console.log(car.errors);
