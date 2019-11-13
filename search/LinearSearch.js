class LinearSearch{
    search(arr,findobject){
        return new Promise( (resolve,reject) =>{
            for(var key of arr){
                if(key==findobject){
                    resolve("array contains "+key);
                }
            }
            reject(key+" is not there in array")
        })
    }
}

var linearSearch = new LinearSearch();
var arr= [1,2,3,4,5,6,7,8,9]
linearSearch.search(arr,4).then( (message) => console.log(message))
                        .catch( (err) => console.log(err));