// @ts-nocheck
/*
let num: Number = new Number(5)
let num2: number = 5
let num3 = Number(5)

num = num2
num2 = num  // error 
*/

const num: number = 5
const strToNum: string = num.toString()

const str: string = "5"
const numToStr: number = +str


interface Department {
	name: string;
	budget: number;
}

const department = {
	name: "web-dev",
	budget: 5000
}

interface Project {
	name: string,
	projectBudget: number
}
/* 
const mainProject: Project = {
	...department,
	projectBudget: 7500
}
 */

function transformDepartment(department: Department, amount: number): Project {
	return {
		name: department.name,
		projectBudget: amount
	}
}

const mainProject: Project = transformDepartment(department, 4000)


function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach(m => console.log(m))
	} else if (isNumber(msg)) {
		console.log(msg.toFixed())
	} else {
		console.log(`msg is not ${!msg}`)
	}
	console.log(msg)
}

printMsg(4)

// const box = document.querySelector(".box")
// box?.addEventListener("click", () => {})

/* 
function isNumber(n: string[] | number | boolean): n is number {
	return typeof n === "number"
}
 */

function isNumber(n: unknown): n is number {
	return typeof n === "number"
}

interface Car {
	engine: string;
	wheels: {
		width: number;
		profile: number;
		diameter: number;
	};
}

interface Ship {
	engine: string;
	sail: string;
}

function repairVehicle(vehicle: Car | Ship): void {
	if (isCar(vehicle)) {
		console.log(vehicle.wheels)
	} else if (isShip(vehicle)) {
		console.log(vehicle.sail)
	} else {
		console.log(vehicle)
	}
}

function isCar(car: Car | Ship): car is Car {
	// return "wheels" in car
	return (car as Car).wheels.diameter !== undefined
}


function isShip(ship: Car | Ship): ship is Ship {
	// return "wheels" in car
	return (ship as Ship).sail !== undefined
}