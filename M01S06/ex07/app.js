const myGuess = Math.floor(Math.random() * 51);
const userGuess = document.getElementById('guess');

const secondHeadingElement = document.createElement('h2');
const headingElement = document.createElement('h1');
headingElement.innerText = 'Guess the number game';

if (userGuess > myGuess) {
  secondHeadingElement.innerText = 'Numarul tau este prea mare.';
}

if (userGuess < myGuess) {
  secondHeadingElement.innerText = 'Numarul tau este prea mic.';
}

document.body.append(secondHeadingElement);
document.body.append(headingElement);
