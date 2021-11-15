// extract div.stage from DOM
const stage = document.querySelector('.stage');
let stageAppearances = 0;

//bind event for mouseover
stage.addEventListener('mouseover', () => {
  const message = 'Mouse ul este pe scena.';

  displayMessage(message);
});

//bind event for mouseout
stage.addEventListener('mouseout', () => {
  const message = 'Mouseul nu este pe scena.';

  displayMessage(message);
  displayCount(`Mouseul a fost pe scena de ${++stageAppearances}.`);
});

//extract paragraph from DOM
let messageElement = document.querySelector('.message');

//hoisting: function to display message (doar functiile function (normale) merg in hoisting)
function displayMessage(message = '') {
  //check if paragraph is there
  if (messageElement === null) {
    messageElement = document.createElement('p');
    messageElement.classList.add('message');
    messageElement.innerText = message;

    document.body.append(messageElement);

    return;
  }

  //write in paragraph
  messageElement.innerText = message;
}

let counterElement = document.querySelector('.counter');

// do not copy code like this
function displayCount(message = '') {
  if (counterElement === null) {
    counterElement = document.createElement('p');
    counterElement.classList.add('counter');
    counterElement.innerText = message;

    document.body.append(counterElement);

    return;
  }

  counterElement.innerText = message;
}
