function getEvenElementsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (!obj.hasOwnProperty(key) || !(obj[key] instanceof Array)) {
      return [];
  }

  var objectArray = obj[key];
  if (objectArray.length <= 0){
      return [];
  }
  return objectArray.filter(isEven, [])
  
}

function isEven(val) {
    return (val % 2) === 0 ;
}
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]