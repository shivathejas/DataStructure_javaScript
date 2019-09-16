var Node = require('./Node');

class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        var newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(){
        var result = this.top.data;
        this.top = this.top.next;
        return result;
    }
    peek(){
        return this.top.data;
    }
    isEmpty(){
        return this.top == null;
    }
}

var stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(14);
stack.push(16);
console.log("top of stack is: ")
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());