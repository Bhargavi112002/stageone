// reverse string//
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  const originalStr = "Hello, world!";
  const reversedStr = reverseString(originalStr);
  console.log(reversedStr);
  

  // alphanumeric character//

  function hasAlphanumeric(str) {
    const regex = /[a-zA-Z0-9]/;
    return regex.test(str);
  }
  
  const testStr1 = "Hello, world!"; 
  const testStr2 = "#$%^&*()"; 
  
  console.log(hasAlphanumeric(testStr1)); 
  console.log(hasAlphanumeric(testStr2)); 
// rearrange array//
function rearrangeArray(arr) {
  let evenNumbers = [];
  let oddNumbers = [];
  
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }
 
  evenNumbers.sort((a, b) => b - a);
  
 
  let result = evenNumbers.concat(oddNumbers);
  
  return result;
}


let input = [2, 3, 4, 6, 5, 1, 8];
let output = rearrangeArray(input);
console.log(output);