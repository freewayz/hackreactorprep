function isPersonOldEnoughToDrinkAndDrive(person) {
  // your code here
  if (!(person instanceof Object) || !person.hasOwnProperty('age')){
      return false;
  }
  var age = person['age'];
  return personCanDrink(age) && personCanDrive(age);
}


function personCanDrive(age) {
    return age >= 16;
}

function personCanDrink(age) {
    return age >= 21;
}

var obj = {
  age: 16
};
var me = 10;
var output = isPersonOldEnoughToDrinkAndDrive(me);
console.log(output); 