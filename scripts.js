// scripts.js
function openEnvelope() {
  var envelope = document.getElementById('envelope');

  // Change the background image to the open envelope
  envelope.style.backgroundImage = "none"; // Remove background image

  // After 5 seconds, add a click event listener to the image
  setTimeout(function () {
    var envelopeImage = document.getElementById('envelopeImage');
    envelopeImage.addEventListener('click', redirectToPage);
  }, 1000);
}

function redirectToPage() {
  // Redirect to the specified page
  window.location.href = 'https://noivos.casar.com/isli-e-ruan';
}
