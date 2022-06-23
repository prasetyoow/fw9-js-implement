function palindrome(str) {
  let reverseString = str.split("").reverse().join("");
  if(str == reverseString)
     console.log("It is a Palindrome");
  else
     console.log("It is not a Palindrome");
}
palindrome("malam");