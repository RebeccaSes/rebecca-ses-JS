const paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  const messageElement = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.append(logContainer);
  }

  messageElement.innerText = message;

  logContainer.append(messageElement);
};
console.log = paragraphLog;

console.log('Apar in DOM, nu in consola');
