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
	errors: any;

	@checkNumberOfSeats(4)
	freeSeats: number;

	@checkFuelLevel
	islockStatus(value: string) {
		return this.lockStatus ? `Locked ${value}`: "Unlocked"
	}

	@validate
	startTravel(@limit passengers: number) {
		console.log(`Started with ${passengers} passengers`)
	}
}

function limit(
	target: Object,
	propertyKey: string | symbol,
	parameterIndex: number
) {
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

function validate(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) {
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

function checkNumberOfSeats(limit: number) {
	return function (target: Object, propertyKey: string | symbol) {
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

function checkFuelLevel(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
): PropertyDescriptor | void {
	const oldValue = descriptor.value
	descriptor.value = function (this: any, ...args: any[]) {
		console.log(this.fuel)
		return oldValue.apply(this, args)
	}
}

function changeLockStatus(status: boolean) {
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			lockStatus = status
		}
	}
}

function changeFuelLevel(amount: number) {
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			fuel = `${amount}%`
		}
	}
}

const car = new Car()
car.startTravel(3)