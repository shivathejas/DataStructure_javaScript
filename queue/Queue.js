var Node = require('./Node');

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(value){
        var newNode = new Node(value);
        if(this.tail != null){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(this.head == null){
            this.head = this.tail;
        }
    }
    poll(){
        var result = this.head.data;
        this.head = this.head.next;
        return result;
    }
    peek(){
        return this.head.data;
    }
    isEmpty(){
        return this.head == null;
    }
}

var queue = new Queue();

queue.add(5);
queue.add(10);
queue.add(15);
queue.add(22);
console.log("queue output");
console.log(queue.poll());
console.log(queue.poll());