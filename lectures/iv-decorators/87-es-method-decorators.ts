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
    freeSeats: number;

    @checkFuelLevel
    isLocked(value: string) {
        return this.lockStatus ? `Locked ${value}`: "Unlocked"
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

function checkFuelLevel<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {    
    return function (this: T, ...args: A): R {
        console.log(this.fuel)

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