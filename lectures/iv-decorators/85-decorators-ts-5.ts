//@ts-nocheck
interface ICar {
    fuel: string;
    lockStatus: boolean;
    freeSpace: number;
}

@toggleLockStatus(false)
@changeFuelLevel(95)
class Car implements ICar {
    fuel: string = "50%";
    lockStatus: boolean;
    freeSpace: number;

    isLocked() {
        console.log(this.fuel)
        return this.lockStatus ? "Locked": "Unlocked"
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
console.log(car.isLocked())