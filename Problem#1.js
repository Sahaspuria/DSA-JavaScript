/*Take the below data and print a string like 
"17C in 1 days...23C in 2 days...11 in 3 days...
*/
// Data = [17, 23, 11];
const Data = [22, -2, 11, 9, 3];

const tempPrint = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} in ${i + 1} days...`;
  }
  console.log(`...` + str);
};
tempPrint(Data);
