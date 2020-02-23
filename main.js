const teamData = {
  teamName: "Club Atlético River Plate",
  logo: "img/logo.png",
  players: [
    {
      photo: "img/armani.png",
      name: "Franco",
      lastName: "Armani",
      number: 1,
      position: "Goalkeeper",
      age: 34
    },
    {
      photo: "img/rojas.png",
      name: "Robert",
      lastName: "Rojas",
      number: 2,
      position: "Right back",
      age: 24
    },
    {
      photo: "img/angileri.png",
      name: "Fabrizio",
      lastName: "Angileri",
      number: 4,
      position: "Left back",
      age: 26
    },
    {
      photo: "img/diaz.png",
      name: "Paulo",
      lastName: "Diaz",
      number: 6,
      position: "Central back",
      age: 26
    },
    {
      photo: "img/sibile.png",
      name: "Kevin",
      lastName: "Sibile",
      number: 16,
      position: "Central back",
      age: 22
    },
    {
      photo: "img/zuculini.png",
      name: "Bruno",
      lastName: "Zuculini",
      number: 5,
      position: "Central midfielder",
      age: 27
    },
    {
      photo: "img/carrascal.png",
      name: "Jorge",
      lastName: "Carrascal",
      number: 8,
      position: "Right midfielder",
      age: 22
    },
    {
      photo: "img/quintero.png",
      name: "Juan Fernando",
      lastName: "Quintero",
      number: 10,
      position: "Atacking midfielder",
      age: 27
    },
    {
      photo: "img/delacruz.png",
      name: "Nicolas",
      lastName: "De la Cruz",
      number: 11,
      position: "Left midfielder",
      age: 23
    },
    {
      photo: "img/suarez.png",
      name: "Matias",
      lastName: "Suarez",
      number: 7,
      position: "Central forward",
      age: 32
    },
    {
      photo: "img/alvarez.png",
      name: "Julian",
      lastName: "Alvarez",
      number: 9,
      position: "Central forward",
      age: 20
    },
    {
      photo: "img/pinola.png",
      name: "Javier",
      lastName: "Pinola",
      number: 22,
      position: "Central back",
      age: 37
    },
    {
      photo: "img/sosa.png",
      name: "Santiago",
      lastName: "Sosa",
      number: 13,
      position: "Central midfielder",
      age: 21
    },
    {
      photo: "img/perez.png",
      name: "Enzo",
      lastName: "Perez",
      number: 24,
      position: "Right midfielder",
      age: 34
    },
    {
      photo: "img/pratto.png",
      name: "Lucas",
      lastName: "Pratto",
      number: 27,
      position: "Central forward",
      age: 32
    }
  ]
};

const playersArray = teamData.players;

//creating a player shuffle function

const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

shuffle(playersArray);

const firstEleven = 11;
const substitutions = 4;
const { teamName, logo } = teamData;

const createElements = () => {
  // insert logo into header
  let createLogo = document.createElement("img");
  createLogo.setAttribute("src", logo);
  let header = document.querySelector("header");
  header.appendChild(createLogo);

  // creating div with id main
  let main = document.createElement("div");
  main.setAttribute("id", "main");
  const body = document.querySelector("body");
  body.appendChild(main);

  //adding h1 for the title
  let title = document.createElement("h1");
  title.innerHTML = teamName;
  header.after(title);

  //creating div with id "players" and appending into main div
  let players = document.createElement("div");
  players.setAttribute("id", "players");
  main.appendChild(players);

  //creating div with id "subs" and appending into main div
  let subs = document.createElement("div");
  subs.setAttribute("id", "subs");
  main.appendChild(subs);

  //adding h2 for marking substitutions
  let subsTitle = document.createElement("h2");
  subsTitle.innerHTML = "Substitutes";
  players.after(subsTitle);
};

//Defining function for adding players

const addPlayers = () => {
  for (let i = 0; i < firstEleven + substitutions; i++) {
    if (i < firstEleven) {
      var parentDiv = players;
    } else {
      var parentDiv = subs;
    }

    let player = document.createElement("div");
    player.classList.add("player");
    parentDiv.appendChild(player);

    //creating img element of a player and appending to div
    let playerImage = document.createElement("img");
    playerImage.setAttribute("src", teamData.players[i].photo);
    player.appendChild(playerImage);

    //creating h4 element with player's name
    let playerName = document.createElement("h4");
    playerName.innerHTML = teamData.players[i].name;
    player.appendChild(playerName);

    //creating h3 element with player's last name
    let playerLastName = document.createElement("h3");
    playerLastName.innerHTML = teamData.players[i].lastName;
    player.appendChild(playerLastName);

    //creating h4 element with player's position
    let playerPosition = document.createElement("h4");
    playerPosition.innerHTML = teamData.players[i].position;
    player.appendChild(playerPosition);

    //creating p element with player's number
    let playerNumber = document.createElement("p");
    playerNumber.innerHTML = teamData.players[i].number;
    player.appendChild(playerNumber);
  }
};

//Defining function for getting random number from array
const getRandomNumber = arr => Math.floor(Math.random() * arr.length);

createElements();

addPlayers();
//Function for making random substitutions

setInterval(() => {
  let firstSquad = document.querySelectorAll("#players .player");
  let secondSquad = document.querySelectorAll("#subs .player");

  let firstSquadNumber = getRandomNumber(firstSquad);
  let secondSquadNumber = getRandomNumber(secondSquad);

  let firstSquadPlayer = firstSquad[firstSquadNumber];
  let secondSquadPlayer = secondSquad[secondSquadNumber];

  let subPrevious = secondSquadPlayer.previousSibling;
  let subNext = secondSquadPlayer.nextSibling;

  firstSquadPlayer.after(secondSquadPlayer);

  subPrevious
    ? subPrevious.after(firstSquadPlayer)
    : subNext.before(firstSquadPlayer);
}, 10000);
