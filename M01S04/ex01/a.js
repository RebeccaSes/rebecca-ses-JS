var name = prompt('Introdu numele tau');
var messageContainer = document.getElementById('message');
var alternateMessageContainer = document.getElementById('alternate-message');
var inputLength = name.replaceAll(' ', '').length;
var message = '';
var testLetter = 'a';

if (inputLength <= 3) {
  message = 'Numele introdus nu e indeajuns de lung.';
} else {
  message = `Numele meu este ${name}`;
}

var lengthMessage = `Numele introdus are ${inputLength} caractere.`;
var inclusionMessage = '';

if (name.includes('a')) {
  inclusionMessage = `Numele contine litera ${testLetter}`;
} else {
  inclusionMessage = `Numele nu contine litera ${testLetter}`;
}

messageContainer.innerText = message;
alternateMessageContainer.innerText = `${lengthMessage} | ${inclusionMessage}`;
