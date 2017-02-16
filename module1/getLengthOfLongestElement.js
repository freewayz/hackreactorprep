function getLengthOfLongestElement(arr) {
    // your code here
    if (arr.length <= 0) {
        return 0;
    }
    var max = 0;
    for (var a = 0; a < arr.length; a++) {
        var current = arr[a].length;
        if (current > max) {
            max = current
        }
    }

    return max;
}


var output = getLengthOfLongestElement(['oueuehhne', 'two', 'three']);
console.log(output); // --> 5