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
  dataNew[i] = dataOld[dataOld.length - 1 - i];
}
console.log(dataNew);

//TASK 3

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var dataNewLength = dataNew.length;
var totalLength = dataOld.length + dataNew.length;

for (var i = dataNew.length; i < totalLength; i++) {
  dataNew[i] = dataOld[i - dataNewLength];
}
console.log(dataNew);

//TASK 4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

for (var i = 0; i < a.length; i++) {
  c[i] = a[i];
}

for (var i = a.length; i < a.length + b.length; i++) {
  c[i] = b[i - a.length];
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

var myPattern = "";

for (var i = 0; i < 6; i++) {
  myPattern += "*";
  console.log(myPattern);
}

//TASK 7

var final = "";
var rows = 6;
var cols = 10;

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < cols; j++) {
    if (j > 0 && j < 9 && i > 0 && i < 5) {
      final += " ";
    } else {
      final += "*";
    }
  }
  final += "\n";
}

console.log(final);
