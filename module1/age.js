function checkAge(name, age) {
  // your code here
  if (age < 21) {
    return "Go Home, " + name + "!";
  } else {
    return "Welcome, " + name + "!";
  }
}


console.log(checkAge('Peter', 21))