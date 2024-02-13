//@ts-nocheck
interface IQueue<T> {
	enqueue(item: T): void;
	dequeue(): T | undefined;
	peek(): T | undefined | null;
	isEmpty(): boolean;
	length(): number;
}

class ArrayQueue<T> implements IQueue<T> {
    private queue: T[] = [];

    enqueue(this: ArrayQueue<T>, item: T): void {
        this.queue.push(item)
    }

    dequeue(this: ArrayQueue<T>): T {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow")
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

// Tests

const arrTest1 = new ArrayQueue<number>();
console.log(arrTest1.peek());
console.log(arrTest1.length());
arrTest1.enqueue(5);
console.log(arrTest1.peek());
console.log(arrTest1.length());
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.length());
console.log(arrTest1.dequeue());
console.log(arrTest1.peek());
console.log(arrTest1.length());
console.log(arrTest1.dequeue());
console.log(arrTest1.peek());
console.log(arrTest1.length());

const arrTest2 = new ArrayQueue<string>();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());

const stackTest1 = new Stack<number>(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());

const stackTest2 = new Stack<string>(10);
console.log(stackTest2.top());
console.log(stackTest2.length()); 
stackTest2.push("s");
console.log(stackTest2.top());
console.log(stackTest2.length()); 
stackTest2.push("t");
console.log(stackTest2.top());
console.log(stackTest2.length()); 
console.log(stackTest2.pop());
console.log(stackTest2.top());
console.log(stackTest2.length()); 