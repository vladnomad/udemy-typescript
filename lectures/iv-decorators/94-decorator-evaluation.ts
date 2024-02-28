//@ts-nocheck
import "reflect-metadata"
const limitMetadataKey = Symbol("limit")

interface ICar {
	fuel: string;
	lockStatus: boolean;
	freeSeats: number;
}

@changeLockStatus(false)
@changeFuelLevel(95)
class Car implements ICar {
	fuel: string = "50%";
	lockStatus: boolean = true;
	test: any;

	constructor(@(limit as any) test: number) {
		this.test = test
	}

	@checkNumberOfSeats(4)
	freeSeats: number

	// @checkFuelLevel
	islockStatus(value: string) {
		return this.lockStatus ? `Locked ${value}`: "Unlocked"
	}

	@validate()
	startTravel(@limit() passengers: number) {
		console.log(`Started with ${passengers} passengers`)
	}
}

function limit() {
	console.log("Init: Parameter Decorator")
	return (
		target: Object,
		propertyKey: string | symbol,
		parameterIndex: number
	) => {
		console.log("Call: Parameter Decorator")
		let limitedParametrs: number[] =
			Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || []
		limitedParametrs.push(parameterIndex)
		Reflect.defineMetadata(
			limitMetadataKey,
			limitedParametrs,
			target,
			propertyKey
		)
	}
}

function validate() {
	console.log("Init: Method Decorator")
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		console.log("Call: Method Decorator")
		let method = descriptor.value

		descriptor.value = function (...args: any) {
			let limitedParametrs: number[] = Reflect.getOwnMetadata(
				limitMetadataKey,
				target,
				propertyKey
			)

			if (limitedParametrs) {
				for (let index of limitedParametrs) {
					if (args[index] > 4) {
                        throw new Error("Maximum number of passengers is 4")
					}
				}
			}
			return method?.apply(this, args)
		}
	}
}

function checkNumberOfSeats(limit: number) {
	console.log("Init: Property Decorator")
	return function (target: Object, propertyKey: string | symbol) {
        console.log("Call: Property Decorator")
		let symbol = Symbol()

		const getter = function (this: any) {
			return this[symbol]
		}

		const setter = function (this: any, newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) {
				this[symbol] = newAmount + 1
			} else {
				Object.defineProperty(target, "errors", {
					value: (`Maximum number of seats is ${limit}, Minimum number is 1.`),
				})
			}
		}

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		})
	}
}

function checkFuelLevel() {
    console.log("Init: Method Decorator")
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	): PropertyDescriptor | void => {
		console.log("Call: Method Decorator")
		const method = descriptor.value
		descriptor.value = function (this: any, ...args: any[]) {
			console.log(this.fuel)
			return method.apply(this, args)
		}
	}
}

function changeLockStatus(status: boolean) {
	console.log("Init: Class Decorator lockStatus")
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log("Call: Class Decorator lockStatus")
		return class extends constructor {
			open = status
		}
	}
}

function changeFuelLevel(amount: number) {
	console.log("Init: Class Decorator changeFuel")
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log("Call: Class Decorator changeFuel")
		return class extends constructor {
			fuel = `${amount}%`
		}
	}
}

const car = new Car(3)
car.startTravel(3)