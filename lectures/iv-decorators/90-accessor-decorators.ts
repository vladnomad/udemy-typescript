//@ts-nocheck
interface ICar {
    fuel: string;
    lockStatus: boolean;
    freeSeats: number;
}

@toggleLockStatus(false)
@changeFuelLevel(95)
class Car implements ICar {
    fuel: string = "50%";
    lockStatus: boolean = true;
    errors: any;
    _weight: number = 1000;

    @log
    set weight(num: number) {
        this._weight = this._weight + num
    }

    get weight() {
        return this._weight
    }

    @checkNumberOfSeats(4)
    freeSeats: number = 3;

    @checkFuelLevel
    isLocked(value: string) {
        return this.lockStatus ? `Locked ${value}`: "Unlocked"
    }
}

function checkNumberOfSeats(limit: number) {
    return function(
        target: undefined, 
        context: ClassFieldDecoratorContext
    ) {
        return function (this: any, newAmount: number) {
            if (newAmount >= 1 && newAmount <= limit) {
                return newAmount
            } else {
                throw new Error(`Maximum number of seats is ${limit}, Minimum number is 1.`)
            }
        }
    }
}

function log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor | void {   
    const setter = descriptor.set 
    const getter = descriptor.get 

    descriptor.set = function (this: any, ...args: any) {
        console.log(`Changing value to ${[...args]}`)
        return setter?.apply(this, args)
    }
    
    descriptor.get = function () {
        console.log("Test")
        return getter?.apply(this)
    }
}

function checkFuelLevel<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {    
    return function (this: T, ...args: A): R {
        console.log(`${String(context.name)} initiated`)
        return target.apply(this, args)
    }
}

function toggleLockStatus(status: boolean) {
    return <T extends { new (...args: any[]): {} }>(
        target: T, 
        context: ClassDecoratorContext<T>
    ) => {
        return class extends target {
            lockStatus = status;
        }
    }
}

function changeFuelLevel(level: number) {
    return <T extends { new (...args: any[]): {} }>(
        target: T, 
        context: ClassDecoratorContext<T>
    ) => {
        return class extends target {
            fuel = `${level}%`;
        }
    }
}

const car = new Car()

console.log(car.isLocked("5 minutes ago"))

car.freeSeats = -1

console.log(car)
console.log(car.errors)

car.weight = 3
console.log(car)