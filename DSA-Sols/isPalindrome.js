 function palindrome(x) {
   let s = x.toString();
  return x==s.split("").reverse().join("")?true:false;
}                                                                                                                                            


palindrome(121);