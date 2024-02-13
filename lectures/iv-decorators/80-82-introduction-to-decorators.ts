//@ts-nocheck
const myCar = {
    fuel: "50%",
    open: true,
    freeSeats: 3,
    isOpen() {
        console.log(this.fuel)
        return this.open ? "Open" : "Closed"
    }
}

function closeCar(car: typeof myCar) {
    car.open = false
    console.log("closeCar")
    return car
}

function addFuel(car: typeof myCar) {
    car.fuel = "100%"
    console.log("addFuel")
    return car
}

// console.log(closeCar(myCar).isOpen())

// console.log(addFuel(closeCar(myCar)).isOpen())

addFuel(closeCar(myCar)).isOpen()

// Function composition

// f(x(y()))
// [ y, x, f ]