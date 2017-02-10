function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var result = [];
  if (!obj.hasOwnProperty(key)) {
      return [];
  }

  var objectArray = obj[key];
  if (objectArray.length <= 0){
      return [];
  }
  return objectArray.filter(greaterThanTen, [])
  
}

function greaterThanTen(val) {
    return val == 10;
}

var obj = {
  key: [1000, 10, 50, 10]
};

var obj2 = {
  key: [1, 2, 50, 100]
};
var output = getElementsThatEqual10AtProperty(obj2, 'key');
console.log(output);