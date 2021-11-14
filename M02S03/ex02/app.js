const $body = $('body');

const $paragraph = $('<p>', {
  text: 'Acesta este un mesaj de eroare',
  class: 'msg',
});
// $paragraph.appendTo($body);

$paragraph.addClass('error');

const $sup = $('<sup>', {
  text: '1',
});
// $sup.prependTo($paragraph);

$body.append($paragraph).prepend($sup);
