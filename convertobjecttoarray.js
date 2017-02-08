function convertObjectToList(obj) {
  // your code here
  var output = [];
  var result = [];
  for (var a in obj){
      output.push(a);
      output.push(obj[a])
      result.push(output)
      output = []
  }
}

var data = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

convertObjectToList(data)