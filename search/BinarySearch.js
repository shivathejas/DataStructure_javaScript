
class BinarySearch{
    search(arr,findObject,startIndex,lastIndex){
        return new Promise((resolve,reject) => {
            // console.log("entere")
            if(startIndex<=lastIndex){
            var mid = Math.floor((startIndex+lastIndex)/2);
            if(arr[mid]==findObject){
                resolve("arr contains ");
            }else if(arr[mid]>findObject){
                this.search(arr,findObject,startIndex,mid);
            }else{
                this.search(arr,findObject,mid+1,lastIndex);
            }
        }
        })
        
    }
}

var binarySearch = new BinarySearch();

var arr = [1,2,3,4,5,6,7,8,9];
var data = 9;
binarySearch.search(arr,data,0,arr.length-1).then((message)=> console.log(message));