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
