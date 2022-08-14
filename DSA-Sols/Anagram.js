function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false; //check whether length of both strings are equal or not.
  }
  const lookup = {}; // we will count the no. of chars.
  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1; // putting in the char counts in obj.
  }
  for (let char of str2) {
    if (!lookup[char]) {
      return false; //check if char is present in second string.
    } else {
      --lookup[char]; //will decrease the count by -1.
    }
  }
  return true;
}
// {a:2,n:0,g:0,r:0,m:1}

validAnagram("anagram", "anagram");
