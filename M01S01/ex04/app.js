var inputRadius = document.getElementById('radius');
var PiNumber = 0;
var form = document.querySelector('form');
var elementResult = document.getElementById('result');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var PiNumber = Math.PI;
  var result = 0;

  result = radius * radius * PiNumber;

  elementResult.innerText = result;

  event.preventDefault();
});
