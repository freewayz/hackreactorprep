function getSquaredElementsAtProperty(obj, key) {
  // your code here

  if (!obj.hasOwnProperty(key) || !(obj[key] instanceof Array)) {
      return [];
  }

  var objectArray = obj[key];
  if (objectArray.length <= 0) {
      return [];
  }

  return objectArray.map(getSquare, [])
}


function getSquare(num) {
    return num * num;
}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]