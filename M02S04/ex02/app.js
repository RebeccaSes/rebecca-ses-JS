const boxControls = document.querySelector('.box-controls');
const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box');

const colorInput = document.getElementById('dynamicColor');

boxControls.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (
    targetElement.nodeName !== 'BUTTON' ||
    targetElement.style.backgroundColor.length <= 0
  ) {
    return;
  }

  // needless step
  const button = targetElement;
  const color = button.style.backgroundColor;

  const selectedRadio = document.querySelector(
    'input[name="radioGrup"]:checked',
  );

  if (selectedRadio !== null) {
    selectedRadio.parentElement.style.backgroundColor = color;
  }

  // box.style.backgroundColor = color; // insert code here for homework, change box here
});

boxControls.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (!targetElement.classList.contains('reset')) {
    return;
  }

  const button = targetElement;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeAttribute('style');
  }
});

// add change event for text input
colorInput.addEventListener('change', (event) => {
  const selectedRadio = document.querySelector(
    'input[name="radioGrup"]:checked',
  );
  // currentTarget = colorInput;
  const input = event.currentTarget;
  const button = input.nextElementSibling;

  button.style.backgroundColor = input.value;
  selectedRadio.parentElement.style.backgroundColor = input.value;
});
