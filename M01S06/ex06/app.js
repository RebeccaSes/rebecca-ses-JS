const paragraphLog = () => {
  let logContainer = document.querySelector('.logs');
  const messageElement = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.append(logContainer);
  }

  messageElement = '';
  for (i = 0; i < arguments.length; i++) {
    messageElement = messageElement + i + ' ';
  }

  messageElement.innerText = messageElement;
  logContainer.append(messageElement);

  // I'm pretty sure this is wrong but I tried
  // my idea: while arguments still exist, write them in messageElement variable
  // while (arguments !== null) {
  //   messageElement.innerText = arguments;
  // }
  // logContainer.append(messageElement);
};
console.domLog = paragraphLog;
