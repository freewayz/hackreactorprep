function select(arr, obj) {
  // your code here
  if (arr.length <= 0) {
      return {}
  }

  var result = {};
  for (var a = 0; a < arr.length; a++) {
      if (obj.hasOwnProperty(arr[a])) {
          var val = arr[a];
          result[val] = obj[val]
      }
  }
  return result
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }