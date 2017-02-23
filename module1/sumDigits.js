function sumDigits(num) {
  // your code here
  var numStr = num.toString().split('')
  var total = 0;
  numStr.forEach((part, x, nums) => {
      if (nums[x] === '-') {
        nums[x + 1] = '-'.concat(nums[x + 1]) 
      } else {
          total = total + parseInt( nums[x])
      }
  })
  return total;
}


var output = sumDigits(1148);
console.log(output)