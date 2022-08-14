function sumZero(arr) {
    let beg=0;
    let end=arr.length-1;
    while(beg<end){
        let sum = arr[beg]+arr[end];
        if(sum===0){
            return [arr[beg], arr[end]];
        }else if(sum > 0){
            end--;
        }else{
            beg++;
        }
    }
}


sumZero([-3,-2,-1,0,2,3,4])