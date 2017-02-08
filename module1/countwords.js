function countWords(str) {
  // your code here
  if (str === ''){
      return {}
  }
  var result = {};
  var words = str.split(' ');
  for(var i = 0; i < words.length; i++) {
      if (result.hasOwnProperty(words[i])) {
          var increment = result[words[i]];
          result[words[i]] = ++increment;
      } else {
          result[words[i]] = 1
      }
  }
  return result;
}


var output = countWords('ask a bunch get a bunch');
console.log(output)