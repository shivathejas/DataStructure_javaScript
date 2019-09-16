var Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null;
    }    
    insert(newData){
        var newNode = new Node(newData);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAfter(position,value){
        var newNode = new Node(value);
        var temp = this.head;
        var k=0;
        if(position <= this.count()-1){            
            while(k<position){
                k++;
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next= newNode;
        }
    }
    insertBefore(position,value){
        var newNode = new Node(value);
        var temp = this.head;
        var k=0;
        if(position <= this.count()-1){
            while(k<position-2){
                k++;
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }
    }
    print(){
        var temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    delete(value){
        var temp = this.head;
        var prev;
        while(temp!= null && temp.data != value){
            prev = temp;
            temp = temp.next;
        }
        if(temp!=null){
            prev.next = temp.next;
        }
    }
    count(){
        var temp = this.head;
        var result=0;
        while(temp!=null){
            result+=1;
            temp = temp.next;
        }
        return result;
    }
    append(value){
        var temp = this.head;
        var newNode = new Node(value);
        while(temp.next!=null){
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = null; 
    }
}

var linkedList = new LinkedList();

linkedList.insert(5);
linkedList.insert(10);
linkedList.insert(15);
linkedList.insert(20);
linkedList.print();
linkedList.append(2);
linkedList.insertBefore(2,100);
console.log("----------------");
// linkedList.delete(1);
// console.log("after delete");
linkedList.print();

console.log("number of nodes");
console.log(linkedList.count());