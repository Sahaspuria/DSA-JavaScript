function averagePair(arr, n){
   let beg=0;
    let end=arr.length-1;
    while(beg<end){
        let avg = arr[beg]+arr[end] /2;
        if(avg === n){
            return true;
        }else if(avg<n){ 
            beg++;
        }else{
            end--;
        }
      
    }return false;
  // Multiple Pointers
}

averagePair([1,2,3,4],2.5)//true
// averagePair([],2.5)//false
// averagePair([1,4,5,6],5)//false
