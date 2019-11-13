class MinHeap{
    constructor(){
        this.arr = new Array();
        this.size = 0;
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChidIndex(index){
        return Math.floor((2*index)+1);
    }
    getRightChildIndex(index){
        return Math.floor((2*index)+2);
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
        return this.arr[this.getParentIndex(index)];
    }
    getLeftChild(index){
        return this.arr[this.getLeftChidIndex(index)];
    }
    getRightChild(index){
        return this.arr[this.getRightChildIndex(index)];
    }
    add(data){
        this.arr[this.size] = data;
        this.size++;
        this.heapifyUp();
    }
    peek(){
        if(this.size>0){
            return this.arr[0];
        }
    }
    poll(){
        if(this.size!=0){
            var data = this.arr[0];
            this.arr[0] = this.arr[this.size-1];
            this.size--;
            this.heapifyDown();
        }
    }
    swap(index1,index2){
        var temp = this.arr[index1];
        this.arr[index1] = this.arr[index2];
        this.arr[index2] = temp;
    }
    heapifyUp(){
        var index = this.size-1;
        if(this.hasParent(index) && this.getParent(index)>this.arr[index]){
            this.swap(index,this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    heapifyDown(){
        var index = 0;
        while(this.hasLeftChild(index)){
            var smallerIndex = this.getLeftChidIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallerIndex = this.getRightChildIndex(index);
            }
            if(this.arr[index]>this.arr[smallerIndex]){
                this.swap(index,smallerIndex);
            }else{
                break;
            }
            index = smallerIndex;
        }
    }
}

var minHeap = new  MinHeap();
minHeap.add(100);
minHeap.add(15);
minHeap.add(20);
minHeap.add(1700);
minHeap.add(25);
console.log(minHeap.arr);
console.log(minHeap.peek());
minHeap.poll();
console.log(minHeap.peek());