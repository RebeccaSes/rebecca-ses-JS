// load image & p element from DOM
const imageElement = document.getElementsByTagName('img')[0];
const messageElement = document.querySelector('.message');

imageLoaded = imageElement.complete;

// bind event to img
// imageElement.addEventListener('load', () => {
//   messageElement.textContent = 'Imaginea s-a incarcat.';
// });
if (imageLoaded) {
  messageElement.textContent = 'Imaginea s-a incarcat';
} else {
  messageElement.textContent = 'Imaginea se incarca...';
}

//v2
imageElement.onload = () => {
  messageElement.textContent = 'Imaginea s-a incarcat.';

  console.log(imageElement.complete);
};

imageElement.addEventListener('click', function () {
  alert(
    'Imaginea cu URL-ul https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.webp s-a incarcat.',
  );
});
