function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  var result = [];
  if (!obj.hasOwnProperty(key) || !(obj[key] instanceof Array)) {
      return [];
  }

  var objectArray = obj[key];
  if (objectArray.length <= 0){
      return [];
  }
  return objectArray.filter(lesserThan100, [])
  
}

function lesserThan100(val) {
    return val < 100;
}
