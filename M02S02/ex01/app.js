// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $body = $('body');
const $p = $('<p>', {
  text: 'Textul paragrafului',
  id: 'myParagraph',
  class: 'clase de css',
});
const $paragraph = $('<p>', {
  text: 'Parola nu trebuie sa fie mai mica de 5.',
});

$p.appendTo($body);
$body.append($paragraph);
// v 2
// $('body').append($p);

$body.append($paragraph);
setTimeout(() => {
  $paragraph.addClass('error');
}, 1000 * 3);

// selection
$('#myParagraph').text('Am schimbat dinamic acest paragraf');

const $span = $('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($paragraph);

$('<h2>', {
  text: 'Message',
}).prependTo($('.container'));

const $navigation = $('<div>', {
  class: 'navigation',
  text: 'nav goes here',
});
const $container = $('.container');
$container.after($navigation);

const $anchor = $('<a></a>', {
  text: 'Primul link',
  class: 'nav-link',
}).appendTo($('.navigation'));

$('<h2>', {
  text: 'Navigatie',
})
  .appendTo($navigation)
  .before($anchor);

const $sup = $('<sup>', {
  text: '1',
}).prependTo($('.nav-link'));

$('<h1>', {
  text: 'Invat jQuery',
})
  .appendTo($navigation)
  .before($('.container'));

const $newParagraph = $('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
}).appendTo($body);

$('<a></a>', {
  text: 'aici',
  href: 'https://code.jquery.com/',
  target: '_blank',
}).appendTo($newParagraph);
