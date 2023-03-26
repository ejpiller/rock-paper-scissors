let playerScore = 0;
let opponentScore = 0;
document.getElementById("you-score").innerText = `${playerScore}`;
document.getElementById("opponent-score").innerText = `${opponentScore}`;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function play() {
  const array = [`rock`, `paper`, `scissors`];
  const computer = array[getRandomInt(3)];
  const computerIndex = array.indexOf(computer);
  const player = array[getRandomInt(3)];
  const playerIndex = array.indexOf(player);

  document.getElementById("you-choice").innerHTML = `You chose ${player}.`;
  document.getElementById(
    "opponent-choice"
  ).innerHTML = `Opponent chose ${computer}.`;

  switch (playerIndex) {
    case 0:
      document.getElementById("you-image").src = "rock.svg";
      break;
    case 1:
      document.getElementById("you-image").src = "paper.svg";
      break;
    case 2:
      document.getElementById("you-image").src = "scissors.svg";
      break;
    default:
      break;
  }

  switch (computerIndex) {
    case 0:
      document.getElementById("opponent-image").src = "rock.svg";
      break;
    case 1:
      document.getElementById("opponent-image").src = "paper.svg";
      break;
    case 2:
      document.getElementById("opponent-image").src = "scissors.svg";
      break;
    default:
      break;
  }


  if (playerIndex === 0 && computerIndex === 2) {
    document.getElementById("result").innerHTML = `You win! Play again?`;
    playerScore = playerScore + 1;
  } else if (playerIndex === 2 && computerIndex === 0) {
    document.getElementById("result").innerHTML = `You lose! Play again?`;
    opponentScore = opponentScore + 1;
  } else if (playerIndex > computerIndex) {
    document.getElementById("result").innerHTML = `You win! Play again?`;
    playerScore = playerScore + 1;
  } else if (computerIndex > playerIndex) {
    document.getElementById("result").innerHTML = `You lose! Play again?`;
    opponentScore = opponentScore + 1;
  } else {
    document.getElementById("result").innerHTML = `It’s a tie! Play again?`;
  }

  document.getElementById("you-score").innerText = `${playerScore}`;
  document.getElementById("opponent-score").innerText = `${opponentScore}`;

}


document.getElementsByTagName("button")[0].addEventListener("click", play);
