function reverseStr(str) {
  let temp = "";
  let arr = [];
  let result = "";
  for ( let i = 0; i <= str.length; i++ ) {
      if ( str[i] === " " || i === str.length) {
        arr.push(temp)
        temp = "";
        i += 1;
    }
    temp += str[i];
  }
  
  for ( let x = arr.length - 1; x >= 0; x--) {
      result += arr[x] + " ";
  }
  console.log(result)
} 
reverseStr("saya belajar javascript")  