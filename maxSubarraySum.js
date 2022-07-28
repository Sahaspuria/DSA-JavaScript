function maxSubarraySum(arr,n){
    let max=0;
    let temp =0;
    // if(arr.length<n) return null;
    for (let i = 0; i < n; i++) {
        temp +=arr[i];
    }
    max=temp;
    for (let j = n; j < arr.length; j++) {
        max = max - arr[j-n] + arr[j];
        temp = Math.max(temp, max);
       
    }
     return temp;
}

// maxSubarraySum([100,200,300,400,500],2)//700
// maxSubarraySum([-3,4,0,-2,6,-1],2)//5
// maxSubarraySum([2,3],3)//null

maxSubarraySum([1,4,2,10,23,3,1,0,20],4)//39

///Sliding window-->