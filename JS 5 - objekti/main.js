//TASK 1

var person = {
  name: "Mike",
  age: 28,
  married: true
};

function changeAgeDeleteMarried(somePerson) {
  somePerson.age = 34;
  delete somePerson.married;

  console.log(somePerson);
}

changeAgeDeleteMarried(person);

//TASK 2

var person_two = {
  name: "Jack",
  age: 32,
  married: true
};

function checkChildrenProperty(someParent) {
  if (!someParent.hasOwnProperty("children")) {
    someParent.children = [
      { name: "Michael", age: 3, gender: "male" },
      { name: "Jenny", age: 5, gender: "female" }
    ];
  }
  console.log(someParent);
}

checkChildrenProperty(person_two);

//TASK 3

var students = [
  {
    name: "Mike",
    age: 28,
    passed: false
  },
  {
    name: "Anna",
    age: 23,
    passed: true
  },
  {
    name: "Jack",
    age: 32,
    passed: true
  }
];

function didStudentPass(listOfStudents) {
  for (var i = 0; i < listOfStudents.length; i++) {
    var student = listOfStudents[i];

    if (student.passed) {
      console.log(student.name + " passed exam.");
    } else {
      console.log(student.name + " didn't pass exam.");
    }
  }
}

didStudentPass(students);

//TASK 4

var students = [
  {
    name: "Mike",
    age: 28,
    passed: false
  },
  {
    name: "Anna",
    age: 23,
    passed: true
  },
  {
    name: "Jack",
    age: 32,
    passed: true
  }
];

function repackData(students) {
  var names = [];
  var years = [];
  var pass = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    names[i] = student.name;
    years[i] = student.age;
    pass[i] = student.passed;
  }
  console.log(names, years, pass);
}

repackData(students);

// TASK 5

var person = {
  name: "Jack",
  age: 32,
  married: true
};

var newPerson = Object.create(person);
console.log(newPerson.age);

// TASK 6

var person = {
  name: "Mike",
  age: 28,
  married: true,

  showNameAndAge: function() {
    console.log(this.name, this.age);
  }
};

person.showNameAndAge(person);

// TASK 7

var person = {
  addData: function(name, age, married) {
    (this.name = name),
      (this.age = age),
      (this.married = married),
      console.log(this);
  }
};

person.addData("Nikola", 27, false);
