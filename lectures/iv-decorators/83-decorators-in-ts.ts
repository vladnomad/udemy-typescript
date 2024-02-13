//@ts-nocheck
interface ICar {
    fuel: string;
    open: boolean;
    freeSpace: number;
}

@closeCar
class Car implements ICar {
    fuel: string = "50%";
    open: boolean;
    freeSpace: number;

    isOpen() {
        console.log(this.fuel)
        return this.open ? "Open" : "Closed"
    }
}

function closeCar<T extends { 
    new (...args: any[]): {} 
}>(constructor: T) {
    // constructor.prototype.open = false
    return class extends constructor {
        open = false;
    }
}

const car = new Car()
console.log(car.isOpen())





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
