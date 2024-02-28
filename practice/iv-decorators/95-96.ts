//@ts-nocheck
import "reflect-metadata"

interface ICuboid {
	width: number;
	length: number;
	height: number;
	calcArea: (multiply?: number) => number
	calcVolume: (multiply?: number) => number
}

type ShippingContainerData = {
	lastCalculation: string;
	created: Date;
}

@addCreated
class ShippingContainer implements ICuboid {
	@IsInt()
	@Min(1)
	width: number;

	@IsInt()
	@Min(1)
	length: number;

	@IsInt()
	@Min(1)
	@Max(8)
	height: number;

	constructor(width: number, length: number, height: number) {
		this.width = width;
		this.length = length;
		this.height = height;
		validate(this, "width", width)
		validate(this, "length", length)
		validate(this, "height", height)
	}

	@lastCalculation("calcArea")
	calcArea(multiply?: number): number {
		return this.width * this.length * (multiply ? multiply : 1)
	}

	@lastCalculation("calcVolume")
	calcVolume(multiply?: number) {
		return this.width * this.length * this.height * (multiply ? multiply : 1)
	}
}

function addCreated<T extends { new (...args: any[]): {} } >(
	constructor: T
) {
	return class extends constructor {
		created = new Date().toLocaleString()
	}
}

function lastCalculation(methodCalled: string) {
	return ( 
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	): PropertyDescriptor | void => {
		const method = descriptor.value

		descriptor.value = function (this: any, ...args: any[]) {
			this.lastCalculation = `Last calculation ${methodCalled} was at ${new Date().toLocaleString()}`

			return method.apply(this, args)
		}
	}
}

function IsInt() {
	return function ( 
		target: Object,
		propertyKey: string | symbol
	) {
		Reflect.defineMetadata("IsInt", true, target, propertyKey)
	}
}

function Min(limit: number) {
	return function ( 
		target: Object,
		propertyKey: string | symbol
	) {
		Reflect.defineMetadata("Min", limit, target, propertyKey)
	}
}

function Max(limit: number) {
	return function ( 
		target: Object,
		propertyKey: string | symbol
	) {
		Reflect.defineMetadata("Max", limit, target, propertyKey)
	}
}

function validate(target: Object, propertyKey: string, value: any) {
	const hasIsInt = Reflect.hasMetadata("IsInt", target, propertyKey)
	const valueIsNotInt = (!Number.isInteger(value) || value !== parseInt(value))
	
	if (hasIsInt && valueIsNotInt) {
		throw new Error(`Property '${propertyKey}' is not an integer`)
	}

	const hasMin = Reflect.hasMetadata("Min", target, propertyKey)
	const getMin = Reflect.getMetadata("Min", target, propertyKey)

	if (hasMin && value < getMin) {
		throw new Error(`Minimum value for property '${propertyKey}' is ${Reflect.getMetadata("Min", target, propertyKey)}`)
	}

	const hasMax = Reflect.hasMetadata("Max", target, propertyKey)
	const getMax = Reflect.getMetadata("Max", target, propertyKey)

	if (hasMax && value > getMax) {
		throw new Error(`Maximum value for property '${propertyKey}' is ${Reflect.getMetadata("Max", target, propertyKey)}`)
	}
}

function finalValidation(obj: unknown) {
	if (obj && typeof obj === "object" && !Array.isArray(obj)) {
		for (let key in obj) {
			validate(obj, key, obj[key as keyof typeof obj])
		}
	}
}

const container = new ShippingContainer(10, 100, 7) as ICuboid & ShippingContainerData

console.log(container.lastCalculation)
console.log(container.created)

container.width = 10
container.height = 5

console.log(container.calcVolume())
console.log(container.lastCalculation)

setTimeout(() => {
	console.log(container.calcArea())
	console.log(container.lastCalculation)
}, 5000)

finalValidation(container)