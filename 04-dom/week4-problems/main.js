const buttons = document.querySelector('.buttons');
const computerMoveImg = document.getElementById('image');
const winnerMsg = document.getElementById('msg');
let playerWinsQty = 0;
let playerWins = document.getElementById('player-wins');
let computerWinsQty = 0;
let computerWins = document.getElementById('computer-wins');

buttons.addEventListener('click', (event) => {
  console.dir(event);
  //only if a btn is clicked, not empty area in .buttons div
  if (event.target.tagName === 'BUTTON') {
    // reset btn borders to gray, if the btn is the clicked button, change to blue
    // Alt: [...buttons.children].forEach((btn)... or Array.from(buttons.children)
    for (let btn of buttons.children) {
      if (btn.innerHTML === event.target.innerHTML) {
        btn.style.borderColor = 'blue';
      } else {
        btn.style.borderColor = 'rgb(118, 118, 118)';
      }
    }

    // reset winner msg color
    winnerMsg.style.color = 'black';

    let playerMove = event.target.id;
    let computerMove = randomMove();

    // show emoji of computer's move
    computerMoveImg.innerHTML = computerMove.img;
    computerMoveImg.ariaLabel = `Computer selects ${computerMove.text}`;

    let result = playGame(playerMove, computerMove.text);

    // set result message & color
    let message = `${result.msg}`;
    if (result.winner === 'player') {
      message += ` You win! 😢`;
    } else if (result.winner === 'computer') {
      message += ` I win! 🥳`;
    }
    winnerMsg.innerHTML = message;
    if (result.winner === 'player') {
      winnerMsg.style.color = 'red';
      playerWinsQty++;
      playerWins.innerHTML = playerWinsQty;
    } else if (result.winner === 'computer') {
      winnerMsg.style.color = 'green';
      computerWinsQty++;
      computerWins.innerHTML = computerWinsQty;
    } else {
      winnerMsg.style.color = 'black';
    }
  }
});

const randomMove = () => {
  let random = Math.random();
  return random <= 0.33
    ? { text: 'rock', img: '🪨' }
    : random <= 0.66
    ? { text: 'paper', img: '🧻' }
    : { text: 'scissors', img: '✂️' };
};

const playGame = (playerMove, computerMove) => {
  let messages = [
    'Rock crushes scissors!',
    'Paper covers rock!',
    'Scissors cuts paper!',
  ];
  if (playerMove === computerMove) {
    return { winner: 'draw', msg: "It's a draw! Try again." };
  } else {
    //winner = player
    if (playerMove === 'rock' && computerMove === 'scissors') {
      return { winner: 'player', msg: messages[0] };
    } else if (playerMove === 'paper' && computerMove === 'rock') {
      return { winner: 'player', msg: messages[1] };
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
      return { winner: 'player', msg: messages[2] };
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
      return { winner: 'computer', msg: messages[0] };
    } else if (computerMove === 'paper' && playerMove === 'rock') {
      return { winner: 'computer', msg: messages[1] };
    } else if (computerMove === 'scissors' && playerMove === 'paper') {
      return { winner: 'computer', msg: messages[2] };
    }
  }
};
