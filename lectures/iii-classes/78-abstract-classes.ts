//@ts-nocheck
interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string;
}

abstract class AbstractVehicle {
    model: string;
    capacity: number;
    abstract startEngine: (time: Date) => string;
    stopEngine(time: Date): string {
        // if class !abstract && method abstract - error
        this.startEngine(new Date())
        return "Engine has stopped"
    }
}
/* 
class Vehicle implements IEngine {
    model: string;
    capacity: number;

    startEngine = (time: Date) => {
        return "Engine has started"
    }
} 
 */
class Vehicle extends AbstractVehicle {
    startEngine = (time: Date) => {
        return "Engine has started"
    }
} 

new Vehicle().startEngine(new Date())