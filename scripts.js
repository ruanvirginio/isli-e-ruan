function openEnvelope() {
  var envelope = document.getElementById('envelope');

  // Troca a imagem do envelope aberto
  envelope.style.backgroundImage = "url('envelope-aberto.jpg')"; /* Imagem do envelope aberto */

  // Após 5 segundos, abrir a nova aba
  setTimeout(function () {
    window.open('https://noivos.casar.com/isli-e-ruan', '_blank');
  }, 5000); // 5000 milissegundos = 5 segundos
}
