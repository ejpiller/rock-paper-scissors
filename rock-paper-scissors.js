function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const array = [`rock`, `paper`, `scissors`];

const computer = array[getRandomInt(3)];
const computerIndex = array.indexOf(computer);
const player = array[getRandomInt(3)];
const playerIndex = array.indexOf(player);

console.log(
  `Let’s play a game of rock, paper, scissors. \nYou chose ${player}, and the computer chose ${computer}.`
);

if (playerIndex === 0 && computerIndex === 2) {
  console.log(`You win!`);
} else if (playerIndex === 2 && computerIndex === 0) {
  console.log(`You lose!`);
} else if (playerIndex > computerIndex) {
  console.log(`You win!`);
} else if (computerIndex > playerIndex) {
  console.log(`You lose!`);
} else {
  console.log(`It’s a tie!`);
}
