function filterOddLengthWords(words) {
  // your code here

  if (words.length <= 0) {
      return [];
  }

  return words.filter(function(word) {
      return (word.length % 2) !== 0 
  }, [])
}


var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']