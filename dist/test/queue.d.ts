export interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined | null;
    isEmpty(): boolean;
    length(): number;
}
export declare const underflow = "Queue underflow";
