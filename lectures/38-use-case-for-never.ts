// @ts-nocheck
interface Car {
	name: "Car";
	engine: string;
	wheels: {
		width: number;
		profile: number;
		diameter: number;
	}
}

interface Ship {
	name: "Ship";
	engine: string;
	sail: string;
}

interface Airplane {
	name: "Airplane";
	engine: string;
	wings: string;
}

interface Motorcycle {
	name: "Motorcycle",
	engine: string,
	wheels: {
		width: number;
		profile: number;
		diameter: number;
	}
}

type Vehicle = Car | Ship | Airplane | Motorcycle

function isCar(vehicle: Vehicle): vehicle is Car {
	return (vehicle as Car).wheels.diameter !== undefined
}

function isShip(vehicle: Vehicle): vehicle is Ship {
	return (vehicle as Ship).sail !== undefined
}

function repairVehicle(vehicle: Vehicle): void {
	switch (vehicle.name) {
		case "Car": 
			console.log(vehicle.wheels)
			break
		case "Ship": 
			console.log(vehicle.sail)
			break
		case "Airplane": 
			console.log(vehicle.wings)
			break
		case "Motorcycle":
			console.log(vehicle.wheels.diameter)
			break
		default: 
			const never: never = vehicle
			console.log("Vehicle not found")
	}
}