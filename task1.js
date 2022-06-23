function palindrome(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]
    } 
    if ( result == str ) {
        console.log("Its a palindrome")
    } else {
        console.log("Its not a palindrome")
    }
    return result;
 }

palindrome("malam")