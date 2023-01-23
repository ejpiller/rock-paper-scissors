function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function play() {
  const array = [`rock`, `paper`, `scissors`];
  const computer = array[getRandomInt(3)];
  const computerIndex = array.indexOf(computer);
  const player = array[getRandomInt(3)];
  const playerIndex = array.indexOf(player);
  document.getElementById(
    "roll"
  ).innerHTML = `You chose ${player}, and the computer chose ${computer}.`;
  if (playerIndex === 0 && computerIndex === 2) {
    document.getElementById("result").innerHTML = `You win! Play again?`;
  } else if (playerIndex === 2 && computerIndex === 0) {
    document.getElementById("result").innerHTML = `You lose! Play again?`;
  } else if (playerIndex > computerIndex) {
    document.getElementById("result").innerHTML = `You win! Play again?`;
  } else if (computerIndex > playerIndex) {
    document.getElementById("result").innerHTML = `You lose! Play again?`;
  } else {
    document.getElementById("result").innerHTML = `It’s a tie! Play again?`;
  }
}

document.getElementsByTagName("button")[0].addEventListener("click", play);