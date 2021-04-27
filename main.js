var playerChoice;
var globalTies = 0;
var globalWins = 0;
var globalLosses = 0;
var computerChoice;

const h1 = document.querySelector('h1');
h1.textContent = "Rock Paper Scissors";

const h = document.querySelector("#wins");
h.textContent = `Wins : ${globalWins}`;

const h2 = document.querySelector("#ties");
h2.textContent = `Ties : ${globalTies}`;

const h3 = document.querySelector("#losses");
h3.textContent = `Losses : ${globalLosses}`;

const button = document.querySelector("#ro");
button.textContent = "Rock";
button.addEventListener('click', function() {
    playerChoice = "r"
    playerVsComputer();
    console.log(computerChoice);
    console.log(playerChoice);
    console.log(globalLosses);
    console.log(globalWins);
    console.log(globalTies);
})

const button2 = document.querySelector("#pa");
button2.textContent = "Paper";
button2.addEventListener('click', function() {
    playerChoice = "p"
    playerVsComputer();
    console.log(computerChoice);
    console.log(playerChoice);
    console.log(globalLosses);
    console.log(globalWins);
    console.log(globalTies);
})

const button3 = document.querySelector("#sc");
button3.textContent = "Scissors";
button3.addEventListener('click', function() {
    playerChoice = "s"
    playerVsComputer();
    console.log(computerChoice);
    console.log(playerChoice);
    console.log(globalLosses);
    console.log(globalWins);
    console.log(globalTies);
})

function playerVsComputer() {
    computerChoice = Math.floor(Math.random() * 3) + 0;
if (computerChoice == 0) {
    computerChoice = "r"
} 
if (computerChoice == 1) {
    computerChoice = "p"
} 
if (computerChoice == 2) {
    computerChoice = "s"
}

if (playerChoice == "r" && computerChoice == "s") {
        h.textContent = `Wins : ${globalWins++}`;
    } else if (playerChoice == "r" && computerChoice == "p") {
        h3.textContent = `Losses : ${globalLosses++}`;
    } else if (playerChoice == "r" && computerChoice == "r") {
        h2.textContent = `Ties : ${globalTies++}`;
    }
    else if (playerChoice == "p" && computerChoice == "s") {
        h3.textContent = `Losses : ${globalLosses++}`;
    } else if (playerChoice == "p" && computerChoice == "r") {
        h.textContent = `Wins : ${globalWins++}`;
    } else if (playerChoice == "p" && computerChoice == "p") { 
        h2.textContent = `Ties : ${globalTies++}`;
    }
    else if (playerChoice == "s" && computerChoice == "p") {
        h.textContent = `Wins : ${globalWins++}`;
    } else if (playerChoice == "s" && computerChoice == "r") {
        h3.textContent = `Losses : ${globalLosses++}`;
    } else if (playerChoice == "s" && computerChoice == "s") { 
        h2.textContent = `Ties : ${globalTies++}`;
    }
}
