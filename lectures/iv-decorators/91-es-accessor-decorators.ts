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

	@logOnSet
	set weight(num: number) {
		this._weight = this._weight + num
	}

	@logOnGet
	get weight() {
		return this._weight
	}

	@checkNumberOfSeats(4)
	freeSeats: number = 3

	@checkFuelLevel
	islockStatus(value: string) {
		return this.lockStatus ? `Locked ${value}`: "Unlocked"
	}
}

function logOnSet<T, R>(
	target: (this: T, value: number) => R,
	context: ClassSetterDecoratorContext<T, number>
) {
	return function (this: T, ...args: any): R {
		console.log(`Changing value by ${[...args]}`)
		return target.apply(this, args)
	}
}

function logOnGet<T, R>(
	target: (this: T) => R,
	context: ClassGetterDecoratorContext<T, number>
) {
	return function (this: T): R {
		console.log(`Test`)
		return target.apply(this)
	}
}

function checkNumberOfSeats(limit: number) {
	return function (target: undefined, context: ClassFieldDecoratorContext) {
		return function (this: any, newAmount: number) {
			if (newAmount >= 1 && newAmount < limit) {
				return newAmount
			} else {
				throw Error(`Maximum number of seats is ${limit}, Minimum number is 1.`)
			}
		}
	}
}

function checkFuelLevel<T, A extends any[], R>(
	target: (this: T, ...args: A) => R,
	context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
	return function (this: T, ...args: A): R {
		// console.log(this.fuel)
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
			lockStatus = status
		}
	}
}

function changeFuelLevel(amount: number) {
	return <T extends { new (...args: any[]): {} }>(
		target: T,
		context: ClassDecoratorContext<T>
	) => {
		return class extends target {
			fuel = `${amount}%`
		}
	}
}

const car = new Car()
car.weight = 3
console.log(car.weight)