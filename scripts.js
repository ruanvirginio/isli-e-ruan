// scripts.js
function openEnvelope() {
  var envelope = document.getElementById('envelope');

  // Change the background image to the open envelope
  envelope.style.backgroundImage = "url('envelope-aberto.jpg')";

  // After 5 seconds, open a new tab and call redirectToPage
  setTimeout(function () {
    // window.open('https://noivos.casar.com/isli-e-ruan', '_blank');
    redirectToPage(); // Call redirectToPage after opening the new tab
  }, 5000);
}

function redirectToPage() {
  // Redirect to the specified page
  window.location.href = 'https://noivos.casar.com/isli-e-ruan';
}
