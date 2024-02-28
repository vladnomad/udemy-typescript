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

function checkFuelLevel(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor | void {
    // descriptor.enumerable = false

    const oldValue = descriptor.value
    
    descriptor.value = function(this: any, ...args: any[]) {
        console.log(this.fuel)
        return oldValue.apply(this, args)
    }

    return descriptor
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
/* 

function toggleLockStatus(status: boolean) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            lockStatus = status;
        }
    }
}

function changeFuelLevel(level: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            fuel = `${level}%`;
        }
    }
} 

*/
const car = new Car()
console.log(car.isLocked("5 minutes ago"))