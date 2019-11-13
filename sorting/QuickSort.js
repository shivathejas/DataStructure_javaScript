class QuickSort{
    sort(arr,l,r){
        if(l<r){
            var pivot = arr[Math.floor((l+r)/2)];
            var index = this.partition(arr,l,r,pivot);
            this.sort(arr,l,index-1);
            this.sort(arr,index,r);
        }
    }
    partition(arr,l,r,pivot){
        while(l<=r){
            while(arr[l]<pivot){
                l++;
            }
            while(arr[r]>pivot){
                r--;
            }
            if(l<=r){
                var temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;
            }
        }
        return l;
    }
    print(arr){
        var outputStr="";
        for(var key of arr){
            outputStr+=key+" ";
        }
        // for(var index in arr){
            // outputStr+=arr[index]+" ";
        // }
        console.log(outputStr);
    }
}

var arr=[3,6,8,9,7,5,1,2,4];
var quickSort = new QuickSort();

console.log("before sort");
quickSort.print(arr);
quickSort.sort(arr,0,arr.length-1);
console.log("after sort");
quickSort.print(arr);