// I have a list of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered list that has been "rotated." Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This list is huge so we want to be efficient here. You can assume all words are lowercase, and that there is only one rotation point in the list. If is no rotation point return 0.

function findRotationPoint(words) {
  if (words.length === 0) {
    console.log('Your array is empty')
    return null
  }
  let pointer = Math.round(words.length / 2)
  while (
    words[pointer] > words[0] ||
    (words[pointer] < words[0] && words[pointer] > words[pointer - 1])
  )
    if (words[pointer] > words[0]) {
      pointer = pointer + Math.round(pointer / 2)
    } else if (words[pointer] < words[0]) {
      pointer = pointer - Math.round(pointer / 2)
    }
  if (pointer >= words.length) {
    return 0
  } else {
    return words[pointer]
  }
}

// Test cases

findRotationPoint(['ptolemaic', 'retrograde', 'asymptote']) // asymptote
findRotationPoint(['ptolemaic', 'asymptote']) // asymptote
findRotationPoint(['asymptote', 'supplant']) // 0
findRotationPoint([]) // 0
findRotationPoint(['retrograde']) // 0
findRotationPoint([
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zebra',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'asymptote', // rotates here!
  'othellolagkage',
]) // asymptote
findRotationPoint([
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'zebra',
  'asymptote', // rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]) // asymptote
