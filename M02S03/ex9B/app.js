document.addEventListener('DOMContentLoaded', () => {
  // extract headings from DOM
  const headings = document.getElementsByTagName('h1');

  // instantiate media query list
  const mediaQueryList = matchMedia('(min-width: 500px)');

  const onClick = (event) => {
    const currentHeading = event.currentTarget;
    const navUl = currentHeading.nextElementSibling;
    const displayValue = getComputedStyle(navUl).display;
    let newValue = '';

    if (displayValue === 'none') {
      newValue = 'block';
    } else {
      newValue = 'none';
    }

    navUl.style.display = newValue;
  };

  // toggleEvents
  const toggleEvents = () => {
    const headingsArray = [...headings];

    if (mediaQueryList.matches) {
      // desktop hi-res
      headingsArray.forEach((heading) => {
        heading.removeEventListener('click', onClick);
      });
    } else {
      // mobile lo-res
      headingsArray.forEach((heading) => {
        heading.addEventListener('click', onClick);
      });
    }
  };

  // displayNavs
  const navs = document.querySelectorAll('h1 + ul');
  const displayNavs = () => {
    const navsArray = [...navs];

    if (mediaQueryList.matches) {
      // hi-res
      navsArray.forEach((nav) => {
        nav.style.display = 'block';
      });
    } else {
      // lo-res
      navsArray.forEach((nav) => {
        nav.style.display = 'none';
      });
    }
  };

  mediaQueryList.addEventListener('change', () => {
    toggleEvents();
    displayNavs();
  });

  toggleEvents();
  displayNavs();
});
