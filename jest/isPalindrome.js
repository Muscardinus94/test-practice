const reverseString = require("./reverseString");
// 앞뒤가 똑같다
// aba
function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = isPalindrome;
