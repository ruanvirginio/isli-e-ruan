function openEnvelope() {
    var envelope = document.getElementById('envelope');
    var invitation = document.getElementById('invitation');
  
    // Troca a imagem do envelope aberto
    envelope.style.backgroundImage = "url('envelope-aberto.jpg')"; /* Imagem do envelope aberto */
  
    // Exibe o conteúdo do convite
    invitation.style.display = 'block';
  }
  