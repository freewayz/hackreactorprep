function removeNumbersLargerThan(num, obj) {
  // your code here
  for (var a in obj) {
    console.log(isNaN(obj[a]))
    if (!isNaN(obj[a]) && obj[a] > num) {
      delete obj[a];
    }
  }
  
  return obj;
}


var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }