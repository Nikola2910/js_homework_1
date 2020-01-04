// TEXT FILE 1
// TASK 1
console.log("TASK 1 HOMEWORK");
var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = 0;

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    a++;
    console.log(
      "At position " +
        data[i] +
        " subposition " +
        data[j] +
        " value is " +
        data[a]
    );
  }
}

// TASK 2
console.log("TASK 2 HOMEWORK");

var anyObject = {
  arrayOfObjects: [
    {
      name: "Mihajlo",
      age: 22
    },
    {
      name: "Jovan",
      age: 33
    },
    {
      name: "Petar",
      age: 44
    }
  ],

  logNameAndAge: function(name, age) {
    this.name = name;
    this.age = age;
    return arguments;
  }
};

var someStudent = anyObject.arrayOfObjects;
for (var i = 0; i < someStudent.length; i++) {
  var result = anyObject.logNameAndAge(someStudent[i].name, someStudent[i].age);
  console.log(result);
}

// TEXT FILE 2
// TASK 1

console.log("TASK 1");
var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

function repackData(obj) {
  var newObject = {
    [obj.name]: obj.name,
    [obj.lastName]: obj.lastName,
    [obj.status]: obj.status
  };
  console.log(newObject);
}

repackData(someData);

// TASK 2
console.log("TASK 2");

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

function allNumbersInOneArray(list) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] > -99999999999) {
      newList[newList.length] = list[i];
    }
    for (var j = 0; j < list[i].length; j++) {
      if (list[i].length > 1) {
        newList[newList.length] = list[i][j];
      }
    }
  }

  return newList;
}

var allInOne = allNumbersInOneArray(someData);
console.log(allInOne);

// TASK 3
console.log("TASK 3");

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
var subarrays = [];
function getSubbarays(list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].length > 1) {
      subarrays[subarrays.length] = list[i];
    }
  }
  return subarrays;
}

var subarrays = getSubbarays(someData);
console.log(subarrays);

function mergeSubarrays(subarrays) {
  var mergedArrays = [];
  for (var i = 0; i < subarrays.length; i++) {
    for (var j = 0; j < subarrays[i].length; j++) {
      mergedArrays[mergedArrays.length] = subarrays[i][j];
    }
  }
  return mergedArrays;
}

var finalArray = mergeSubarrays(subarrays);
console.log(finalArray);

// TASK 4
console.log("TASK 4");

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married"
};

function checkName(obj) {
  if (obj.hasOwnProperty("name")) {
    return removeName;
  } else {
    return addName;
  }
}

function removeName(obj) {
  delete obj.name;
  console.log("Name removed");
  console.log(obj);
}

function addName(obj, name) {
  obj.name = name;
  console.log("Name added");
  console.log(obj);
}

var result1 = checkName(someData);
result1(someData);

var result2 = checkName(someData);
result2(someData, "Jack");

// TASK 5
console.log("TASK 5");

var someData = {
  name: "Peter",
  lastName: "Dinklage",
  status: "married",
  hasName: function() {
    var hasName = this.hasOwnProperty("name");
    if (hasName) {
      this.secondMethod = function() {
        console.log("secondMethod called");
        this.thirdMethod = function() {
          console.log("thirdMethod called");
          addName(this, "Mike");
        };
        removeName(this);
        this.thirdMethod();
      };
      this.secondMethod();
    }
    return hasName;
  }
};

someData.hasName();
