
function areThereDuplicates() {
    let obj={};
    
  for (var i of arguments) {
        obj[i]=++obj[i]||1;
  }
    if(obj[i]>1){
            return true;
        }else{
   return false;
    }
}

areThereDuplicates('a','b','b') //true
// areThereDuplicates('a','b','d') //false
// areThereDuplicates(1,2,2) //true
// areThereDuplicates(1,2,3) //false