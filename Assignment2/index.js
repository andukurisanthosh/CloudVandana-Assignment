function reverseWords(sentence) {
  return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

function sortArrayDescending(array) {
  return array.sort((a, b) => b - a);
}

// Example usage:

const sentence = "This is a sunny day";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: sihT si a ynnus yad

const array = [1, 5, 3, 2, 4];
const sortedArray = sortArrayDescending(array);
console.log(sortedArray); // Output: [5, 4, 3, 2, 1]