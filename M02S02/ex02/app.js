// DOM Content loaded:
// document.addEventListener('DOMContentLoaded')

// bad and deprecated:
// $(document).ready(function(){

// })

// note the overloading
$(function () {
  $personForm = $('#personForm').on('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const person = {};
    const formIterator = formData.entries();

    for (const fieldData of formData.entries()) {
      const [fieldName, fieldValue] = fieldData;

      person[fieldName] = fieldValue;
    }

    const $personContainer = renderPerson(person);

    // variation
    $personContainer.appendTo($personForm);
  });

  // hoisting
  function renderPerson(person) {
    const $personContainer = $('<article>');
    $('<h1>', {
      text: `${person.name} ${person.surname}`,
    }).appendTo($personContainer);

    $('<p>', {
      text: `Varsta: ${person.age}`,
    }).appendTo($personContainer);

    return $personContainer;
  }
});
