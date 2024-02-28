import { underflow } from "./queue.js";
class ArrayQueue {
    queue = [];
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error(underflow);
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    length() {
        return this.queue.length;
    }
}
class Stack {
    stack = [];
    limit;
    constructor(limit = Number.MAX_VALUE) {
        this.limit = limit;
    }
    push(item) {
        if (this.length() + 1 > this.limit) {
            throw new Error("Stack Overflow");
        }
        else {
            this.stack.push(item);
        }
    }
    pop() {
        if (this.length() !== 0) {
            return this.stack.pop();
        }
        throw new Error("Stack Underflow");
    }
    length() {
        return this.stack.length;
    }
    isEmpty() {
        return this.length() === 0;
    }
    top() {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1];
        }
        else {
            return null;
        }
    }
}
