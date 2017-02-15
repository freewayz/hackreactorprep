function filterEvenLengthWords(words) {
  // your code here
  if (words.length <= 0) {
      return [];
  }

  return words.filter((word) => {
      return (word.length % 2) === 0
  }, [])
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']