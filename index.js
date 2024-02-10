"use strict";
class Box {
    // width!: number;
    width;
    height;
    constructor(width) {
        this.width = width;
        this.height = 500;
    }
}
const firstBox = new Box(250);
console.log(firstBox);
