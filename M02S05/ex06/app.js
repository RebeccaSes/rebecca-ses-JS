$(function () {
  const $dialog = $('#dialog').dialog({
    autoOpen: false,
  });

  const altAlert = (message) => {
    $dialog.find('p').text(message).end();
  };

  alert('in alert');

  window.alert = altAlert;

  alert('in jquery ui');
});
