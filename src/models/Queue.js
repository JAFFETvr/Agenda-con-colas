
 import { Node } from "./Nodo.js";
export class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        let newNode = new Node(data);
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue() {
        if (!this.front) {
            return null;
        } else {
            let temp = this.front;
            this.front = this.front.next;
            if (!this.front) {
                this.rear = null;
            }
            return temp.data;
        }
    }
    isEmpty() {
        return this.front === null;
    }
}
