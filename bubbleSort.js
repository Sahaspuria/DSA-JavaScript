function bubbleSort(arr) {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i-1; j++) {
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwap=false;
            }
            console.log(arr, arr[j],arr[j+1])
        }
        // if(noSwap) break;
    }
    return arr;
}

bubbleSort([2,4,1,3,5])


// by adding no swap we dont have to execute more number of 
// swap where data is nearly sorted like this [9,1,2,3,4,5,6]
// bubbleSort([9,1,2,3,4,5,6])