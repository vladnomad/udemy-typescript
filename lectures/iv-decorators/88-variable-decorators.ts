//@ts-nocheck
interface ICar {
    fuel: string;
    lockStatus: boolean;
    freeSeats: number;
}

class Car implements ICar {
    fuel: string = "50%";
    lockStatus: boolean = true;
    errors: any;

    @checkNumberOfSeats(4)
    freeSeats: number;

    isLocked() {
        return this.lockStatus ? "Locked": "Unlocked"
    }
}

function checkNumberOfSeats(limit: number) {
    return function(
        target: Object, 
        propertyKey: string | symbol
    ) {
        /* 
        let symbol = Symbol()

        const getter = function (this: any) {
            return this[symbol]
        }

        const setter = function (this: any, newAmount: number) {
            if (newAmount >= 1 && newAmount <= limit) {
                this[symbol] = newAmount
        */
       
        let value: number

        const getter = function () {
            return value
        }

        const setter = function (newAmount: number) {
            if (newAmount >= 1 && newAmount < limit) {
                value = newAmount
                // value = `value: ${newAmount}`
            } else {
                Object.defineProperty(target, "errors", {
                    value: `Maximum number of seats is ${limit}`
                })
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

const car = new Car()

car.freeSeats = 5
console.log(car)
console.log(car.errors)

/* 
console.log(car.freeSeats)
car.freeSeats = 3
console.log(car.freeSeats)
*/