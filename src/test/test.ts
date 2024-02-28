import { type IQueue, underflow } from "./queue.js"

class ArrayQueue<T> implements IQueue<T> {
    private queue: T[] = [];

    enqueue(this: ArrayQueue<T>, item: T): void {
        this.queue.push(item)
    }

    dequeue(this: ArrayQueue<T>): T {
        if (this.isEmpty()) {
            throw new Error(underflow)
        } 

        return this.queue.shift() as T
    }

    peek(this: ArrayQueue<T>): T | null {
        if (this.isEmpty()) {
            return null
        }
            
        return this.queue[0]
    }

    isEmpty(this: ArrayQueue<T>): boolean {
        return this.queue.length === 0 
    }

    length(this: ArrayQueue<T>): number {
        return this.queue.length 
    }
}

class Stack<T> {
    private stack: T[] = [];
    private limit: number;

	constructor(limit: number = Number.MAX_VALUE) {
		this.limit = limit;
	}

	push(this: Stack<T>, item: T) {
        if (this.length() + 1 > this.limit) {
            throw new Error("Stack Overflow")
        } else {
            this.stack.push(item)
        }
	}

	pop(this: Stack<T>) {
		if (this.length() !== 0) {
			return this.stack.pop() as T;
		}

		throw new Error("Stack Underflow");
    }

	length(this: Stack<T>): number {
		return this.stack.length
	}

	isEmpty(this: Stack<T>): boolean {
        return this.length() === 0
	}

	top(this: Stack<T>): T | null {
        if (this.length() !== 0) {
            return this.stack[this.length() - 1]
        } else {
            return null
        }
	}
}