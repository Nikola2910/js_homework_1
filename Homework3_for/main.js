//TASK 1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
  dataNew[i] = dataOld[i];
}
console.log(dataNew);

//TASK 2

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
  dataNew[i] = dataOld[dataOld.length - i - 1];
}
console.log(dataNew);

//TASK 3

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];

for (var i = 2; i < 6; i++) {
  dataNew[i] = dataOld[i - 2];
}
console.log(dataNew);

//TASK 4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {
  c[i] = a[i];
}

for (var i = 5; i < 8; i++) {
  c[i] = b[i - 5];
}
console.log(c);

//TASK 5

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {
  c[i * 2] = a[i];
}

for (var i = 0; i < b.length; i++) {
  c[i * 2 + 1] = b[i];
}
console.log(c);

//TASK 6

var myArray = ["*"];

var myPattern = [];

for (var i = 0; i < 7; i++) {
  myPattern[i] = myArray[i - i];

  console.log(myPattern);
}

//TASK 7
