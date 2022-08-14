function search(arr,n) {
    for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
        if(arr[i] === n){
            return i;
        }
    }
}

search([1,2,3,4,5,6], 4) //3
