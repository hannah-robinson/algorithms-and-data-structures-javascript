//===================
// Letter Frequency
//===================

// Challenge:
// Given a string, calculate the frequency of each character.
// All characters should be counted. This includes lower and upper case letters, digits, whitespace, special characters, or any other distinct characters.
// Write a function to count the occurrences of each character in a given string.
// The function should return a 2D array with each of the elements in the following form: ['char', freq]. The character should be a string with a length of 1, and frequency is a number denoting the count.
// For example, given the string "ab", your function should return [['a', 1], ['b', 1]].

// My solution:
function letterFrequency(txt) {
  const sorted = txt.split('').sort()
  const lookup = {}
  for (let val of sorted) {
    lookup[val] ? lookup[val]++ : (lookup[val] = 1)
  }
  const frequencyArray = []
  for (const prop in lookup) {
    frequencyArray.push([prop, lookup[prop]])
  }
  return frequencyArray
}

// Test cases:

letterFrequency('Not all that Mrs. Bennet, however') //[[" ", 5], [",", 1], [".", 1], ["B", 1], ["M", 1], ["N", 1], ["a", 2], ["e", 4], ["h", 2], ["l", 2], ["n", 2], ["o", 2], ["r", 2], ["s", 1], ["t", 4], ["v", 1], ["w", 1]].

letterFrequency('daughters, could ask on the ') // [[" ", 5],[",", 1],["a", 2],["c", 1],["d", 2],["e", 2],["g", 1],["h", 2],["k", 1],["l", 1],["n", 1],["o", 2],["r", 1],["s", 2],["t", 2],["u", 2]].

letterFrequency('husband any satisfactory description') // [[" ", 3], ["a", 4], ["b", 1], ["c", 2], ["d", 2], ["e", 1], ["f", 1], ["h", 1], ["i", 3], ["n", 3], ["o", 2], ["p", 1], ["r", 2], ["s", 4], ["t", 3], ["u", 1], ["y", 2]].

letterFrequency('in various ways--with barefaced') // [[" ", 3], ["-", 2], ["a", 4], ["b", 1], ["c", 1], ["d", 1], ["e", 2], ["f", 1], ["h", 1], ["i", 3], ["n", 1], ["o", 1], ["r", 2], ["s", 2], ["t", 1], ["u", 1], ["v", 1], ["w", 2], ["y", 1]].

letterFrequency('distant surmises; but he eluded') // [[" ", 4], [";", 1], ["a", 1], ["b", 1], ["d", 3], ["e", 4], ["h", 1], ["i", 2], ["l", 1], ["m", 1], ["n", 1], ["r", 1], ["s", 4], ["t", 3], ["u", 3]].

letterFrequency('last obliged to accept the second-hand,') // [[" ", 5], [",", 1], ["-", 1], ["a", 3], ["b", 1], ["c", 3], ["d", 3], ["e", 4], ["g", 1], ["h", 2], ["i", 1], ["l", 2], ["n", 2], ["o", 3], ["p", 1], ["s", 2], ["t", 4]].
