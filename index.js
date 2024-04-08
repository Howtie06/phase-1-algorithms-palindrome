function isPalindrome(word) {
  // Write your algorithm here
  const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  return cleanWord === cleanWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  remove any non letter characters from the word and convertthem to lowercase.
  check if cleaned word is equal to its reverse
  return true if they are equal
  return false if otherwise
*/

/*
  Add written explanation of your solution here
  the first function removes any non letters from the input words and converts them to lowercase.
  then it checks if the cleaned word is equal to its reverse .if they are equal it returns true indicating the word is a palindrome and if not it returns false
  showing the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
