function binarySearch(arr, ele) {
    let beg=0;
    let end= arr.length-1;
    let mid = Math.floor((beg+end)/2);
    while(arr[mid]!==ele  && beg<end){
        if( ele < arr[mid])end = mid-1;
        else beg=mid+1;
        mid = Math.floor((beg+end)/2); 
    }
    return arr[mid] === ele ? mid:-1;
}

binarySearch([2,3,4,5,6,11,14,22,31],13);