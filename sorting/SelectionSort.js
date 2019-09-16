class SelectionSort{
    sort(arr){
        var minIndex;
        for(var i=0;i<arr.length;i++){
            minIndex=i;
            for(var j=i;j<arr.length;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex = j;
                }
            }
            if(i!=minIndex){
                var temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }
    print(arr){
        for(var key of arr){
            console.log(key);
        }
    }
}

var arr=[3,6,8,9,7,5,1,2,4];
var selectionSort = new SelectionSort();

console.log("before sort");
selectionSort.print(arr);
selectionSort.sort(arr);
console.log("after sort");
selectionSort.print(arr);