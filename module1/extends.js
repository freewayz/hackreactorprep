function extend(obj1, obj2) {
  // your code here
  for (var a in obj2) {
    if (!obj1.hasOwnProperty(a)) {
        obj1[a] = obj2[a]
    }
  }
  return obj1
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};
var testExtend = extend(obj1, obj2);
console.log(testExtend)