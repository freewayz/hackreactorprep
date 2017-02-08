
var testData  = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

function transformEmployeeData(array) {
  // your code here
    var output = []
    array.map(function(val, i, []) {
        if (val instanceof Array) {
           var  result = {}
            for (var a in val){
                result[val[a][0]] = val[a][1] 
            }
            output.push(result)
        }
    });

    return output;
}

transformEmployeeData(testData)