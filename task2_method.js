const reverseWords = (str) => {
  const words = str.split(" ")
  const revWords = words.reverse()
  return revWords.join(" ")
}

console.log(reverseWords("Saya belajar Javascript"))