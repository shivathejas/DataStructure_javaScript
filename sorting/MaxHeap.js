class MaxHeap{
    constructor(){
        this.arr = new Array();
        this.size = 0;
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){
        return (2*index)+1;
    }
    getRightChildIndex(index){
        return (2*index)+2;
    }
    hasParent(index){
        return Math.floor((index-1)/2) >= 0;
    }
    hasLeftChild(index){
        return (2*index)+1 < this.size;
    }
    hasRightChild(index){
        return (2*index)+2 < this.size;
    }
    getParent(index){
        return this.arr[Math.floor((index-1)/2)];
    }
    getLeftChild(index){
        return this.arr[(2*index)+1];
    }
    getRightChild(index){
        return this.arr[(2*index)+2];
    }
    add(data){
        this.arr[this.size]=data;
        this.size++;
        this.heaifyUp();
    }
    peek(){
        if(this.size>=0){
            return this.arr[0];
        }
    }
    poll(){
        var data = this.arr[0];
        this.arr[0] = this.arr[this.size-1];
        this.size--;
        this.heapifyDown();
    }
    swap(index1,index2){
        var temp = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = temp;
    }
    heaifyUp(){
        var index = this.size-1;
        while(this.hasParent(index) && this.getParent(index) < this.arr[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown(){
        var index = 0;
        while(this.hasLeftChild(index)){
            var greaterIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getLeftChild(index) < this.getRightChild(index)){
                greaterIndex = this.getRightChildIndex(index);
            }
            if(this.arr[greaterIndex]>this.arr[index]){
                this.swap(greaterIndex,index);
            }
            index = greaterIndex;
        }
    }
}

var maxHeap = new  MaxHeap();
maxHeap.add(100);
maxHeap.add(150);
maxHeap.add(200);
maxHeap.add(17);
maxHeap.add(2500);
console.log(maxHeap.peek());
maxHeap.poll();
console.log(maxHeap.peek());