function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.replaceAll(" ", "");
  const reverseWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reverseWord;
}
isPalindrome("nurses run");

// Solution 2
function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

// Solution 3
function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = polishedString.split("").reverse().join("");
  return polishedString === reversedString ? true : false;
}
let result = palindrome("A man***, a p_lan, a canal. Panama");
console.log(result);

// Solution 4
let palindrome = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  //console.log(start, end);
  let flip = end.split("").reverse().join("");
  return start === flip;
};
console.log(palindrome("radar")); //true
console.log(palindrome("redder")); //true
console.log(palindrome("window")); //false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");
}

module.exports = isPalindrome;
