class MergeSort{
    sort(arr,l,r){
        if(l<r){
            var m = Math.floor((l+r)/2);
            this.sort(arr,l,m);
            this.sort(arr,m+1,r);
            this.merge(arr,l,m,r);
        }
    }
    merge(arr,l,m,r){
        var n1 = m-l+1;
        var n2 = r-m;
        var L = [];
        var R = [];
        for(var i=0;i<n1;i++){
            L[i] = arr[l+i];
        }
        for(var j=0;j<n2;j++){
            R[j] = arr[m+1+j];
        }
        var i=0,j=0,k=l;
        while(i<n1 && j<n2){
            if(L[i]<R[j]){
                arr[k] = L[i];
                i++;
            }else{
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while(i<n1){
            arr[k] = L[i];
            i++;
            k++;
        }
        while(j<n2){
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    print(arr){
        var outputStr="";
        for(var key of arr){
            outputStr+=key+" ";
        }
        // for(var index in arr){
        //     outputStr+=arr[index]+" ";
        // }
        console.log(outputStr);
    }
}

var arr = [3,6,8,9,7,5,1,2,4];
var mergeSort = new MergeSort();
console.log("before sort");
mergeSort.print(arr);
mergeSort.sort(arr,0,arr.length-1);
console.log("after sort ");
mergeSort.print(arr);