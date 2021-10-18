const calculateRectangleArea = function (L, l) {
  return L * l;
};

console.warn(`
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2.
Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?
`);

const barleyYield = 25;
const field1Surface = calculateRectangleArea(100, 250);
const field2Surface = calculateRectangleArea(350, 200);
const field1Yield = barleyYield * field1Surface;
const field2Yield = barleyYield * field2Surface;

console.log(field2Yield - field1Yield);

console.warn(`Stiind ca din 10kg de hamei produc 2.5l de bere,
cati litri de bere va produce un teren de 400m pe 370m?
`);
const beerYield = 2.5 / 10; // per kg
const field3Surface = calculateRectangleArea(400, 370);
const field3Yield = barleyYield * field3Surface;
const totalProduction = field3Yield * beerYield;

console.log(totalProduction);

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina.
Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri
stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);
let fieldSurface = calculateRectangleArea(300, 200);
let flourYield = fieldSurface * 32;
let breadYield = flourYield * 2.5;
console.log(breadYield);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
let field1Area = calculateRectangleArea(150, 200);
let field2Area = calculateRectangleArea(500, 300);
flour1Field = field1Area * 32;
flour2Field = field2Area * 32;
let totalBreadProduction = (flour1Field + flour2Field) * 2.5;
console.log(totalBreadProduction);
