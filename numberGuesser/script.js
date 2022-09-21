'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Wrong Entry';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '👌 Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Guess is too high' : '📉 Guess is too low';
    } else {
      document.querySelector('.message').textContent = '🤢 You lost the game';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '🤔 Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🐱‍👓 Start guessing';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

//   // When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 0) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = '📈 Guess is too high';
//     } else {
//       document.querySelector('.message').textContent = '🤢 You lost the game';
//     }
//   }
//   // When guess is too low
//   else if (guess < secretNumber) {
//     if (score > 0) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = '📉 Guess is too low';
//     } else {
//       document.querySelector('.message').textContent = '🤢 You lost the game';
//     }
//   }
