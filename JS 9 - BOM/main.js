// All tasks are marked as comments except the last one for easier aproaching and testing.
// Timeout for the last task is set to 10000 ms for faster checking.

// //TASK 1
console.log("TASK 1");

// function statusAlert() {
//   if (navigator.onLine) {
//     alert("Browser is online");
//     console.log("Browser is online");
//   } else {
//     alert("Browser is offline");
//     console.log("Browser is offline");
//   }
// }

// statusAlert();
console.log("");

// //TASK 2
console.log("TASK 2");

// function reloadPage() {
//   window.onload = function() {
//     if (!location.hash) {
//       location = location + "#reloaded";
//       location.reload();
//     } else if ((location.hash = "reloaded")) {
//       alert("Page has been reloaded");
//     }
//   };
// }

// reloadPage();
// console.log("Page has been reloaded");
console.log("");

//TASK 3
console.log("TASK 3");

// function goToGoogle() {
//   setTimeout(function() {
//     location.href = "http://google.com";
//   }, 3000);
// }

// goToGoogle()

console.log("");

//TASK 4
console.log("TASK 4");
// var num = 0;
// function incrementation() {
//   num++;
//   console.log(num);

//   if (num == 15) {
//     clearInterval(int);
//   }
// }

// var int = setInterval(incrementation, 1000);
console.log("");

//TASK 5
console.log("TASK 5");

// var counter = 0;
// function randomNumber() {
//   counter++;
//   var result = Math.round(Math.random() * 10);
//   console.log(result);

//   if (counter == 6) {
//     clearInterval(secondInt);
//   }
// }

// var secondInt = setInterval(randomNumber, 500);
console.log("");

//TASK 6
console.log("TASK 6");

var users = [
  {
    name: "Nikola",
    age: 27,
    status: "inactive"
  },
  {
    name: "Ilija",
    age: 27,
    status: "inactive"
  },
  {
    name: "Jovan",
    age: 27,
    status: "inactive"
  },
  {
    name: "Luka",
    age: 27,
    status: "inactive"
  },
  {
    name: "Stefan",
    age: 27,
    status: "inactive"
  }
];

var enteredName = prompt("What is your name?");
var loggedInUser;
var index;

function logUser() {
  if (
    users.some(function(user, i) {
      index = i;
      return user.name === enteredName;
    })
  ) {
    //saving user in local storage and changing status to "active"
    loggedInUser = users[index];
    loggedInUser.status = "active";
    localStorage.setItem("loggedInUser", loggedInUser.name);
    console.log(loggedInUser.name + " is now logged in.");
    // setting timeout for local storage removal
    setTimeout(function() {
      loggedInUser.status = "inactive";
      localStorage.removeItem("loggedInUser");
      console.log(loggedInUser.name + " has logged out.");
    }, 10000);
  } else {
    console.log("User with name " + enteredName + " does not exist.");
  }
}

logUser();
