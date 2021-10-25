(() => {
  const showAlert = () => {
    alert('Butonul a fost apasat');
  };

  document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButton = document.querySelector('#removeButton');
    const messageElement = document.createElement('p');
    const hideParagraphMessage = 'Alerta va fi afisata';
    const showParagraphMessage = 'Alerta nu va fi afisata';

    showButton.addEventListener('click', showAlert);
    let eventBound = true;
    messageElement.innerText = hideParagraphMessage;

    document.body.append(messageElement);

    toggleEventButton.addEventListener('click', function () {
      const toggleEventButton = this;
      const showMessage = 'Porneste afisarea';
      const hideMessage = 'Opreste afisarea';

      let message = '';
      let paraagraphMessage = '';

      if (eventBound === true) {
        // remove event listener
        showButton.removeEventListener('click', showAlert);
        message = showMessage;
        paraagraphMessage = showParagraphMessage;
        eventBound = false;
      } else {
        // add event listener
        showButton.addEventListener('click', showAlert);
        message = hideMessage;
        eventBound = true;
        paraagraphMessage = hideParagraphMessage;
      }

      // refactor
      toggleEventButton.innerText = message;
      messageElement.innerText = paraagraphMessage;
    });

    removeButton.addEventListener('click', () => {
      const canRemove = confirm('Remove buttons?');

      if (canRemove === false) {
        return;
      }

      showButton.remove();
      toggleEventButton.remove();
    });
  });
})();
