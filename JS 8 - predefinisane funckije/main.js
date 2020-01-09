//TASK 1
console.log("TASK 1");
var givenString = "Lorem ipsum dolor sit amet";

function lowerCase(string) {
  return string.toLowerCase();
}

var lowCase = lowerCase(givenString);
console.log(lowCase);
console.log("");

//TASK 2
console.log("TASK 2");

function checkWord(sentence, search) {
  if (sentence.toLowerCase().includes(search.toLowerCase())) {
    console.log(search + " exists in the sentence");
  } else {
    console.log(search + " doesn't exist in the sentence");
  }
}

checkWord(givenString, "sit");
console.log("");

//TASK 3
console.log("TASK 3");

function findLastLetter(string) {
  var lastLetter = string.charAt(string.length - 1);
  return string.lastIndexOf(lastLetter);
}

var indexOfLastLetter = findLastLetter(givenString);
console.log(indexOfLastLetter);
console.log("");

//TASK 4
console.log("TASK 4");

function splitString(string) {
  return string.split(" ", 3);
}

var firstThreeResults = splitString(givenString);
console.log(firstThreeResults);
console.log("");

//TASK 5
console.log("TASK 5");

var newGivenString = "Piter is an actor.";

function modifyString(string) {
  var e = string.indexOf("e");
  var o = string.lastIndexOf("o");
  string = string.substring(0, e) + "o" + string.substring(e + 1);
  string = string.substring(0, o) + "e" + string.substring(o + 1);
  return string;
}

var newString = modifyString(newGivenString);
console.log(newString);
console.log("");

//TASK 6
console.log("TASK 6");

var someData = [34, 23, 14, 56, 23, 44, 65];

var numberToRemove = 56;

function removeNumberFromArray(array, number) {
  var index = array.indexOf(number);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

var newArray = removeNumberFromArray(someData, numberToRemove);
console.log(newArray);
console.log("");

//TASK 7
console.log("TASK 7");

var someOtherData = [34, 23, 14, 56, 23, 44, 65];

function modifyArray(array) {
  array.shift();
  var newArray = array.slice(0, 3);
  var arrayEnd = array.slice(3, 6).reverse();
  newArray = newArray.concat(arrayEnd);
  return newArray;
}

var modifiedArray = modifyArray(someOtherData);
console.log(modifiedArray);
console.log("");

//TASK 8
console.log("TASK 8");
var someData = [334, 233, 212, 199, 154, 122];

function reduceElements(array) {
  var reducedArray = array.map(function(element) {
    if (array.indexOf(element) == 0) {
      return element;
    } else return element - array[array.indexOf(element) - 1];
  });
  return reducedArray;
}

var repackedArray = reduceElements(someData);
console.log(repackedArray);

console.log("");

//TASK 9
console.log("TASK 9");

var students = [
  {
    name: "Jim",
    avgGrade: 8.4556
  },
  {
    name: "Mike",
    avgGrade: 8.5492
  },
  {
    name: "Anna",
    avgGrade: 8.3322
  },
  {
    name: "Jack",
    avgGrade: 8.6111
  }
];

var passingGrade = 8.5;

function largeGradeOnly(studentsArray, grade) {
  var goodStudents = studentsArray.filter(function(element) {
    return element.avgGrade > 8.5;
  });

  goodStudents.forEach(function(element) {
    element.avgGrade = element.avgGrade.toFixed(2);
  });

  return goodStudents;
}

var goodStudents = largeGradeOnly(students, passingGrade);
console.log(goodStudents);
