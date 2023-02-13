const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;

  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Joseph", 1965, 2023));
console.log(ageCalculator("Kate", 1969, 2023));
console.log(ageCalculator("Anthony", 1989, 2023));
