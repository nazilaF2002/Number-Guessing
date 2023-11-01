'use strict';
let guessNumber = document.querySelector('.guess').value = 16;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(typeof guessNumber);
let highscore=0;
let score = 20;
document.querySelector('.score').textContent = score;
let check=document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = document.querySelector('.guess').value;
  //high
  // if (guessNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
  //low
  // else if (guessNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //   }
  // } 
  //win
  if (guessNumber == secretNumber) {
    displayMessage('correct namber') ;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if(score>highscore){
      highscore=score;
      document.querySelector(".highscore").textContent=highscore;
    }
  }
  
  else if (guessNumber != secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber>secretNumber?'high':'low')  ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     displayMessage('you lose the game') ;
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } 
});

//message function
function displayMessage(message){
  document.querySelector('.message').textContent=message;
}

//agian button
document.querySelector('.again').addEventListener("click", function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = 16;
  document.querySelector('.message').textContent = 'Start guessing...';
  let score=20;
  document.querySelector('.score').textContent=score;
});








