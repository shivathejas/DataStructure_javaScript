class BubbleSort{
    sort(arr){
        var len = arr.length;
        for(var i=0;i<len;i++){
            for(var j=i;j<len;j++){
                if(arr[i]>arr[j]){
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp; 
                }
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
var bubbleSort = new BubbleSort();
console.log("before sort");
bubbleSort.print(arr);
bubbleSort.sort(arr);
console.log("after sort");
bubbleSort.print(arr);