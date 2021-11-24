// element out of DOM
const hero = document.querySelector('.hero');
const controls = document.querySelector('.controls');
const stageElement = document.querySelector('.stage');

const character = {
  width: hero.offsetWidth,
  height: hero.offsetHeight,
  element: hero,
};

const stage = {
  width: stageElement.offsetWidth,
  height: stageElement.offsetHeight,
};

// set initial game state
const gameState = {
  left: 500,
  top: 0,
};

const increments = 15;

const speed = {
  forward: increments,
  back: -increments,
  up: -increments,
  down: increments,
};

const orthogonal = {
  x: 'left',
  ArrowLeft: 'left',
  ArrowRight: 'left',
  ArrowDown: 'top',
  ArrowUp: 'top',
  y: 'top',
};

character.element.style.cssText = generateCssText(gameState);

// event delegation on buttons
controls.addEventListener('click', (event) => {
  const button = event.target;

  // delegation conditions
  if (button.nodeName !== 'BUTTON') {
    return;
  }

  // const axis = button.dataset.axis;
  // const direction = button.dataset.direction;

  const { axis, direction } = button.dataset;

  moveCharacter(axis, direction);
});

document.body.addEventListener('keydown', (event) => {
  const key = event.code;

  // I had no idea how to change this code to make it work for Y axis as well
  const axis = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(key)
    ? 'x'
    : 'y';

  const directionOptions = {
    ArrowRight: 'forward',
    ArrowLeft: 'back',
    ArrowDown: 'forward',
    ArrowUp: 'back',
  };
  const direction = directionOptions[key];

  moveCharacter(axis, direction);
});

// hoisting
function moveCharacter(axis, direction) {
  // (left, top, etc)
  const positionProperty = orthogonal[axis]; // x sau y
  const coeficient = speed[direction];

  gameState[positionProperty] += coeficient;

  preventOutOfBoundsBehavior(gameState);

  character.element.style.cssText = generateCssText(gameState);
}

function generateCssText(gameState) {
  // return `top: ${gameState.top}px; left: ${gameState.left}px;`;
  return `transform: translateX(${gameState.left}px)`;
}

function preventOutOfBoundsBehavior(gameState) {
  // prevent negative x axis
  if (gameState.left <= 0) {
    gameState.left = 0;
  }
  // prevent positive x axis out of bounds
  if (gameState.left >= stage.width - character.width) {
    gameState.left = stage.width - character.width;
  }

  // prevent negative y axis
  if (gameState.top <= 0) {
    gameState.top = 0;
  }

  // prevent negative y axis
  if (gameState.top >= stage.height - character.height) {
    gameState.top = stage.height - character.height;
  }
}
