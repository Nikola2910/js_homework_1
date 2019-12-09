// TASK 1

function reverseArray(list) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    newList[i] = list[list.length - 1 - i];
  }

  return newList;
}

var result = reverseArray(["Learn", "To", "Hard", "Not", "Is", "JavaScript"]);
console.log(result);

// TASK 2

function findType(parameter) {
  console.log(typeof parameter);
}

findType(2);
findType("Hello");
findType(true);
findType({
  name: "Nikola",
  age: "27"
});

// TASK 3

function getLongestName(namesList) {
  var name = [];
  for (var i = 0; i < namesList.length; i++) {
    if (namesList[i].length > name.length) {
      name = namesList[i];
    }
  }
  return name.length;
}

var longestNameLength = getLongestName([
  "Nikola",
  "Ilija",
  "Jovan",
  "Luka",
  "Djordje",
  "Stefan"
]);
console.log(longestNameLength);

// TASK 4

function getSecondLowest(list) {
  var lowest = list[0];
  var secondLowest = list[1];

  if (secondLowest < lowest) {
    var temp = lowest;
    lowest = secondLowest;
    secondLowest = temp;
  }

  for (var i = 0; i < list.length; i++) {
    if (list[i] < lowest) {
      lowest = list[i];
    } else if (list[i] < secondLowest && list[i] > lowest) {
      secondLowest = list[i];
    }
  }

  return secondLowest;
}

function getSecondGreatest(list) {
  var greatest = list[0];
  var secondGreatest = list[1];

  if (secondGreatest > greatest) {
    var temp = greatest;
    greatest = secondGreatest;
    secondGreatest = temp;
  }

  for (var i = 0; i < list.length; i++) {
    if (list[i] > greatest) {
      greatest = list[i];
    } else if (list[i] > secondGreatest && list[i] < greatest) {
      secondGreatest = list[i];
    }
  }

  return secondGreatest;
}

function getSecondNumbers(list) {
  var secondLowest = getSecondLowest(list);
  var secondLargest = getSecondGreatest(list);

  var exportedValues = [secondLowest, secondLargest];

  console.log(exportedValues);
  return exportedValues;
}

getSecondNumbers([22, 15, 12, 3, 9, 199, 87]);

// TASK 5

function getNumbers(list, singleNumber) {
  var largeNumbers = [];

  for (var i = 0; i < list.length; i++) {
    if (list[i] > singleNumber) {
      largeNumbers[largeNumbers.length] = list[i];
    }
  }
  return largeNumbers;
}

function printNumbers(list, singleNumber) {
  // call function
  var result = getNumbers(list, singleNumber);
  // console log result
  console.log(result);
}

printNumbers([22, 3, 12, 5, 55, 17, 8], 12);

// TASK 6

function getLargest(list) {
  var largest = list[0];

  for (var i = 1; i < list.length; i++) {
    if (list[i] > largest) {
      largest = list[i];
    }
  }

  return largest;
}

function getLowest(list) {
  var lowest = list[0];

  for (var i = 1; i < list.length; i++) {
    if (list[i] < lowest) {
      lowest = list[i];
    }
  }

  return lowest;
}

function doTheMath(functionLargest, functionLowest) {
  list = [4, 7, 6, 4, 12, 6, 3, 8, 10];

  var largest = functionLargest(list);
  var lowest = functionLowest(list);

  var result = largest * lowest;

  console.log(result);
  return result;
}

doTheMath(getLargest, getLowest);

// TASK 7

function getUnique(list) {
  var uniquesArray = [];
  found = false;
  for (var i = 0; i < list.length; i++) {
    //prvi prolazak kroz petlju
    for (var j = 0; j < list.length; j++) {
      //drugi prolazak kroz petlju
      if (i === j) {
        //poredjenje indexa (koji su uvek isti u pocetku)
        continue;
      } else {
        //poredjenje vrednosti clanova
        if (list[i] == list[j]) {
          found = true;
          //ukoliko su isti bice true i onda izlazak iz petlje
          break;
        }
      }
    }
    //ukoliko nije nadjen, znaci da je uniqe
    if (!found) {
      //standardno ubacivanje clanova u array
      uniquesArray[uniquesArray.length] = list[i];
    }
    //na kraju drugog prolaska, vracanje vrednosti found u false
    found = false;
  }
  return uniquesArray;
}

//funkcija koja prima listu a brise najveci
function deleteGreatest(list) {
  var finalArray = [];
  var largestNumber = getLargest(list);
  for (i = 0; i < list.length; i++) {
    if (list[i] === largestNumber) {
      continue;
    } else {
      finalArray[finalArray.length] = list[i];
    }
  }
  return finalArray;
}
//krajnja funkcija --> prima listu brojeva i funkciju za brisanje najveceg i daje listu jedinstvenih bez najveceg
function finalFunction(list, deleteGreatest) {
  var uniqeList = getUnique(list);
  var finalList = deleteGreatest(uniqeList); //brise najveci iz nove liste
  console.log(finalList);
  return finalList;
}

//krajnja funkcija
finalFunction(
  [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64],
  deleteGreatest
);
