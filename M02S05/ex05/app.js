const picoAlert = (message) => {
  const modal = picoModal(message);

  modal.show();
};

alert('regular alert');

window.alert = picoAlert;

alert('picoalert');
