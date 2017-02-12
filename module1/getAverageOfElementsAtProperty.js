function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (obj.hasOwnProperty(key) 
    && (obj[key] instanceof Array) && obj[key].length > 0) {
      return obj[key].reduce(sum, 0) / obj[key].length
  } 

  return 0
}

function sum(a, b) {
    return a + b
}

var obj = {
  key: []
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2