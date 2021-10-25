function calculateSurface(L, l) {
  if (arguments.length === 2) {
    return L * l;
  } else {
    return L ** 2;
  }
}

console.warn(
  `Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface() care sa
  primeasca un singur parametru si sa calculeze suprafata unui patrat. `,
);
const calculateSquareSurface = (L) => {
  return calculateSurface(L);
};

console.warn(`Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4.
`);
console.log(calculateSquareSurface(4));

console.warn(`Creeaza un wrapper numit calculateRectangleSurface()
pentru calculateSurface() care sa primeasca doi parametrii
si sa calculeze suprafata unui dreptunghi. `);

const calculateRectangleSurface = (l, L) => {
  return calculateSurface(l, L);
};

console.warn(`Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.
`);
console.log(calculateRectangleSurface(8, 9));
