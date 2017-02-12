function countAllCharacters(str) {
  // your code here

  if (str === '') {
      return {}
  }
  var result = {};
  var letters = str.split('')
  for (var i = 0; i < letters.length; i++) {
      // is the letter in our object
      if (result.hasOwnProperty(letters[i])) {
          // just increment the value
          var count = result[letters[i]];
          result[letters[i]] = ++count;
      } else {
          result[letters[i]] = 1
      }
  }

  return result;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}