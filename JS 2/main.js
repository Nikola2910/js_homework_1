//TASK 1
var a, b, c, d, e;

a = 15;
b = -2;
c = 22;
d = 0;
e = 13;

if (a > b && a > c && a > d && a > e) {
  console.log(a + " is the largest number.");
} else if (b > a && b > c && b > d && b > e) {
  console.log(b + " is the largest number.");
} else if (c > a && c > b && c > d && c > e) {
  console.log(c + " is the largest number.");
} else if (d > a && d > b && d > c && d > e) {
  console.log(d + " is the largest number.");
} else if (e > a && e > b && e > c && e > d) {
  console.log(e + " is the largest number.");
} else {
  console.log("There are 2 or more same largest numbers.");
}

//TASK 2

var a, b, c, product;

a = 3;
b = -7;
c = 2;

product = a * b * c;

if (product > 0) {
  console.log("Product is +");
} else if (product < 0) {
  console.log("Product is -");
} else {
  console.log("Product is 0");
}

//TASK 3

var language = "English";

switch (language) {
  case "English":
    console.log("Hello World!");
  //break;
  case "Italian":
    console.log("Ciao Mondo!");
  //break;
  case "Spanish":
    console.log("Hola Mundo!");
  //break;
  case "German":
    console.log("Hallo Welt!");
  //break;
  case "French":
    console.log("Bonjour le Monde!");
    break;
  default:
    console.log("Language not supported.");
}

//TASK 4

var userAge = 12;

var isOlderThan28 = userAge >= 28 ? true : false;

if (!isOlderThan28) {
  console.log("User is less than 28 years old");
} else if (userAge != 28) {
  console.log("User is older than 28");
} else {
  console.log("User is 28");
}
