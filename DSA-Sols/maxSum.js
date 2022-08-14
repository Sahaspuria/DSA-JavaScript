function maxSum(arr, n) {
    let max=0;
    let temp =0;
    if (arr.length < n) return null; //return null if array is empty.
    for(let i=0; i<n; i++){
        max +=arr[i] //return sum of first n numbers.
    }
   
    temp = max;
    for (let j = n; j < arr.length; j++) { //run after n numbers upto length of array.
        temp = temp - arr[j-n] + arr[j]; //remove the element from beginning and add the element after n numbers and slide through the numbers. (sliding window pattern)
        console.log(temp,max);
    }
        return temp > max ? temp: max;
    
}


// maxSum([1,2,5,9,4,7],3) //20
// maxSum([1,2,3,4,5,6],2); //11