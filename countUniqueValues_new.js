function uniqueValues(arr) {
    let result={}
    for (let int of arr) {
        result[int]=++result[int] ||1;
    }
   return Object.keys(result).length;
    
}

uniqueValues([1,2,3,4,5,5,6,6,12,1111,10])