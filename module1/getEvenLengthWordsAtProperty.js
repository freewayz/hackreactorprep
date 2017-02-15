function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if (!obj.hasOwnProperty(key) || !(obj[key] instanceof Array)) {
      return [];
  }
  var result = []

  var objectArray = obj[key];
  if (objectArray.length <= 0) {
      return []
  }

  return objectArray.filter(isWordLengthEven, [])
}


function isWordLengthEven(word) {
    return word.length % 2 == 0;
}


var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']