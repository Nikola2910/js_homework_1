// TASK 1
console.log("TASK 1");

function Student(name, lastName, age, averageGrade) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.averageGrade = averageGrade;
}

var studentOne = new Student("Jovan", "Suzic", 27, 5);
var studentTwo = new Student("Ilija", "Reljic", 27, 4.53);
var studentThree = new Student("Luka", "Markovic", 27, 3.92);

console.log(studentOne, studentTwo, studentThree);

// TASK 2
console.log("TASK 2");

function Player(name, lastName, age, goals, cards) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.goals = goals;
  this.cards = cards;
}

var marin = new Player("Marko", "Marin", 33, 2, 0);
var boakye = new Player("Richmond", "Boakye", 29, 14, 2);
var jovancic = new Player("Dusan", "Jovancic", 27, 4, 3);
var simic = new Player("Veljko", "Simic", 27, 6, 1);
var degenek = new Player("Milos", "Degenek", 29, 0, 4);

console.log(marin, boakye, jovancic, simic, degenek);

// TASK 3
console.log("TASK 3");

function TeamPlayer(team) {
  this.name = team[0];
  this.lastName = team[1];
  this.age = team[2];
  this.goals = team[3];
  this.cards = team[4];
}

var redStar = [
  ["Marko", "Marin", 33, 2, 0],
  ["Richmond", "Boakye", 29, 14, 2],
  ["Dusan", "Jovancic", 27, 4, 3],
  ["Veljko", "Simic", 27, 6, 1],
  ["Milos", "Degenek", 29, 0, 4]
];

for (var i = 0; i < redStar.length; i++) {
  this[redStar[i][1].toLowerCase()] = new TeamPlayer(redStar[i]);
}

console.log(marin, boakye, jovancic, simic, degenek);

// TASK 4
console.log("TASK 4");

function add(numOne, numTwo) {
  var rez = numOne + numTwo;
  return rez;
}
function substract(numOne, numTwo) {
  var rez = numOne - numTwo;
  return rez;
}
function multiply(numOne, numTwo) {
  var rez = numOne * numTwo;
  return rez;
}
function divide(numOne, numTwo) {
  var rez = numOne / numTwo;
  return rez;
}

function Operation(numOne, numTwo, operation) {
  this.firstNumber = numOne;
  this.secondNumber = numTwo;
  this.result = function() {
    return operation(numOne, numTwo);
  };
}

var addition = new Operation(7, 5, add);
console.log(addition.result());

var substraction = new Operation(25, 11, substract);
console.log(substraction.result());

var multiplication = new Operation(4, 6, multiply);
console.log(multiplication.result());

var division = new Operation(15, 3, divide);
console.log(division.result());
