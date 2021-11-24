const form = document.getElementById('personForm');
const submitButton = form.querySelector('button[type="submit"]');

const personForm = new Pristine(form);
const isValid = personForm.validate(true);

if (!isValid) {
  submitButton.disabled = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // do Ajax stuff
});

form.addEventListener('input', (event) => {
  const input = event.target;

  if (input.name === undefined) {
    return;
  }

  const isValid = personForm.validate(true);
  submitButton.disabled = !isValid;
});
