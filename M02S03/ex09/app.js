document.addEventListener('DOMContentLoaded', () => {
  // array-like object (obiect similar cu acel array)
  const headings = document.querySelectorAll('h1');

  // named event handler for h1 click
  const clickHandler = (event) => {
    // current target = element on which addEventListener runs
    const currentHeading = event.currentTarget;
    const nextUl = currentHeading.nextElementSibling;
    const displayValue = getComputedStyle(nextUl).display;

    if (displayValue === 'none') {
      nextUl.style.display = 'block'; // CSS: display: block;
    } else {
      nextUl.style.display = 'none'; // CSS: display: none;
    }
  };

  // subroutine for analyzing window width
  const toggleEvents = () => {
    const headingsArray = Array.from(headings);

    if (window.innerWidth < 500) {
      headingsArray.forEach((heading) => {
        heading.addEventListener('click', clickHandler);
      });
    } else {
      headingsArray.forEach((heading) => {
        heading.removeEventListener('click', clickHandler);
      });
    }
  };

  const navs = document.querySelectorAll('h1 + ul');
  const displayNavs = () => {
    const navsArray = Array.from(navs);
    let displayValue = 'none';

    if (window.innerWidth > 500) {
      displayValue = 'block';
    }

    navsArray.forEach((nav) => {
      nav.style.display = displayValue;
    });
  };

  // event handler for resize (*named)
  //debounce on resize
  const resizedHandler /* onResize */ = debounce(() => {
    console.log('resizing...');
    toggleEvents();
    displayNavs();
  }, 200);
  window.addEventListener('resize', resizedHandler);

  toggleEvents();
  displayNavs();
});
