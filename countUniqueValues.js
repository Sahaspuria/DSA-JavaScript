function uniqueValues(arr) {
    if(arr.length === 0) return 0;
    let i=0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i]!==arr[j]){ //check whether i's element is equals to j's.
            i++; //increment i position.
            arr[i]=arr[j]; //put j(unique element) to the position of i.
        }
    }
        return i+1; //indexing starts with 0 so add 1 for real number.
    
}

uniqueValues([1,2,3,4,5,5,6,6,12,1111,10])