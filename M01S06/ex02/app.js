const paragraphElement = document.createElement('p');
const headingElement = document.createElement('h1');
const userAgentString = navigator.userAgent.toLowerCase();
let message = 'Nu stim ce browser folosesti';
let browserName = 'N/A';

if (userAgentString.includes('chrome')) {
  message = 'Navighezi folosind Chrome';
  browserName = 'Chrome';
}

// if (userAgentString.includes('mozilla')) {
//   message = 'Navighezi folosind Mozilla Firefox';
//   browserName = 'Mozilla';
// }

paragraphElement.innerText = message;

document.body.append(paragraphElement);
document.body.append(headingElement);

setTimeout(() => {
  const userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  headingElement.innerText = `Salut ${userName}`;

  // callback hell
  setTimeout(() => {
    paragraphElement.remove();
  }, 3000);
}, 3000);
