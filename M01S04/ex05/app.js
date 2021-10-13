// Folosind un bloc if si keywordul continue, afiseaza mesajul "Acest numar este multiplu de 7." atunci cand este cazul.
// var i;

// for (i = 0; i <= 100; i++) {
//   console.log(i);

//   if (i % 7 !== 0) {
//     continue; // jump to next iteration
//   }

//   console.log('Acest numar este multiplu de 7.');
// }

// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.”

var i;
var testNumber = prompt('Introdu un numar');
var upperLimit = prompt('Introdu limita superioara');

for (i = 0; i <= upperLimit; i++) {
  if (i % testNumber !== 0) {
    continue; // jump to next iteration
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
