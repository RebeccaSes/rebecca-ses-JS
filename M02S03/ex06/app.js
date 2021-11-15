const button = document.querySelector('.btn');

const renderMessage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  return p;
};

const eventListener = () => {
  const windowWidth = window.innerWidth;
  let sectionClass = '';

  if (windowWidth < 650) {
    sectionClass = 'low-res';
  }

  if (windowWidth >= 650 && windowWidth <= 1000) {
    sectionClass = 'mid-res';
  }

  if (windowWidth > 1000) {
    sectionClass = 'high-res';
  }

  const relevantSection = document.querySelector(`.${sectionClass}`);
  const paragraph = renderMessage('Butonul a fost apasat in aceasta rezolutie');
  relevantSection.append(paragraph);
};

button.addEventListener('click', eventListener);
