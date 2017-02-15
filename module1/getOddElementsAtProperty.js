function getOddElementsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (!obj.hasOwnProperty(key) || !(obj[key] instanceof Array)) {
      return [];
  }

  var objectArray = obj[key];
  if (objectArray.length <= 0){
      return [];
  }
  return objectArray.filter(isOdd, [])
  
}

function isOdd(val) {
    return (val % 2) !== 0 ;
}

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]