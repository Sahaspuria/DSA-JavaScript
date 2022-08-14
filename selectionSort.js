function selSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest= i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[lowest]){
                lowest = j;
            }
        }
        if(i!==lowest){
        let temp = arr[i]
        arr[i]=arr[lowest]
        arr[lowest]=temp;
        console.log(arr, arr[i], arr[lowest])
        }
        
    }
    return arr;
}

// function selSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]<arr[i]){
//             let temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp;
//             }
//             console.log(arr, arr[i], arr[j])
//         }
        
//     }
//     return arr;
// }
// More efficient for selSort([5,1,2,3]) took very few steps;


selSort([5,1,2,3,11,4]);
