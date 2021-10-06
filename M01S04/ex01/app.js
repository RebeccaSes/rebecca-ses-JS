var value = prompt('Introdu un numar');
var paragraphElement = document.getElementById('message');
var badInputMessage = 'Nu ai introdus un numar.';
var testNumber = 35;

if (value == null) {
  value = NaN;
} else {
  if (value.trim().length <= 0) {
    value = NaN;
  }
}

value = Number(value);

if (isNaN(value) === false) {
  if (value < testNumber) {
    paragraphElement.innerText = `Numarul este mai mic decat ${testNumber}.`;
  } else if (value === testNumber) {
    paragraphElement.innerText = `Numarul este egal cu ${testNumber}.`;
  } else {
    paragraphElement.innerText = `Numarul este mai mare decat ${testNumber}.`;
  }
} else {
  paragraphElement.innerText = badInputMessage;
}
