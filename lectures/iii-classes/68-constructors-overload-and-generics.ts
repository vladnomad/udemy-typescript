//@ts-nocheck
class Box1 {
    width: number;
    volume: string;
    height: number;

    constructor(width: number)
    constructor(volume: string)
    constructor(widthOrVolume: number | string) {
        if (typeof widthOrVolume === "number") {
            this.width = widthOrVolume;
        } else {
            this.volume = widthOrVolume
        }

        this.height = 500;
    }
}

class Box2<T> {
    width: T;
    height: number;

    constructor(width: number) {
        this.width = width;
        this.height = 500;
    }
}