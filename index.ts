class Box {
    // width!: number;
    width: number;
    height: number;

    constructor(width: number) {
        this.width = width;
        this.height = 500;
    }
}

const firstBox = new Box(250)
console.log(firstBox)