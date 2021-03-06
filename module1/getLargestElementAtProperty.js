function getLargestElementAtProperty(obj, key) {
  // your code here

  if (!obj.hasOwnProperty(key) || !(Array.isArray(obj[key]))){
      return undefined;
  }

  var objArray = obj[key];
  if (objArray.length <= 0) {
      return undefined;
  }

  var result = 0;

  for (var a = 0; a <= objArray.length -1; a++) {
      if (objArray[a] > result) {
        result = objArray[a];
      }
  }

  return result;
}

var obj = {
  key: [2, 1, 5, 0, 9, 1]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 1