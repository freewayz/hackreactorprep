function getElementOfArrayProperty(obj, key, index) {
  // your code here
  if (!(obj.hasOwnProperty(key)) || !(Array.isArray(obj[key]))) {
    console.log("Here")
    return undefined;
  }
  
  var objArray = obj[key];
  console.log(objArray.length)
  if (objArray.length <= 0 || objArray.length > index) {
    return undefined;
  }
  
  return objArray[index];
}

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output);