const calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn(
  `Calculeaza suprafata de tapet necesara pentru o
  camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista
  o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5. “Suprafata de
  tapet necesara este: xxx metri patrati.”`,
);
const longWallSurface = calculateRectangleArea(2.5, 6);
const shortWallSurface = calculateRectangleArea(2.5, 4);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);
const requiredWallpaper = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este: ${requiredWallpaper} metri patrati.`);

console.warn(`Creaza o functie wrapper numita calculateSquareArea()
pentru calculateRectangleArea() care sa primeasca ca parametru latura
unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta
pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);

const calculateSquareArea = (L) => {
  const squareArea = calculateRectangleArea(L, L);

  return squareArea;
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu
 tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o
 suprafata de ferestre de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”`);
const longWallArea = calculateRectangleArea(2.5, 12);
const shortWallArea = calculateRectangleArea(2.5, 9);
const doorArea = calculateRectangleArea(3, 2);
const windowArea = calculateRectangleArea(3, 2);
const totalWallArea = (longWallArea + shortWallArea) * 2;
const neededWallpaper = totalWallArea - doorArea - windowArea;

console.log(
  `Suprafata de tapet necesara este: ${neededWallpaper} metri patrati.`,
);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii:
latimea si lungimea unui dreptunghi initial,
apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().`);
const aggregateSurfaceArea = (L1, l1, L2, l2) => {
  const rectangle1Area = calculateRectangleArea(L1, l1);
  const rectangle2Area = calculateRectangleArea(L2, l2);

  return rectangle1Area + rectangle2Area;
};

console.warn(`Folosind aceasta noua functie calculeaza suprafata
totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. `);

const totalSurface = aggregateSurfaceArea(48, 92, 51, 102);
console.log(totalSurface);
