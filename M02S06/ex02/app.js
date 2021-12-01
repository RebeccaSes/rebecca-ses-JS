// node app 25
const [nodePath, modulePath, ...arguments] = process.argv;
console.log(arguments);

if (arguments.length !== 1) {
  console.warn('Ne trebuie un singur paramentru. Latura patratului');

  // node specific:
  process.exit(0);
}

// const [value] = arguments;
const value = parseFloat(arguments[0]);

if (isNaN(value)) {
  console.warn('Latura trebuie sa fie numerica');

  process.exit(0);
}

console.log(`${calculateSquareSurface(value)}`);

// hoisting
function calculateSquareSurface() {
  return l ** 2;
}
