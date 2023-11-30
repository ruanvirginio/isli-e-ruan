function openEnvelope() {
    var envelope = document.getElementById('envelope');
    var invitation = document.getElementById('invitation');

    // Troca a imagem do envelope aberto
    envelope.style.backgroundImage = "url('envelope-aberto.jpg')"; /* Imagem do envelope aberto */

    // Exibe o conteúdo do convite
    invitation.style.display = 'block';

    // Agora, adicionamos um temporizador para mostrar o pop-up após 5 segundos
    setTimeout(function() {
        showPopup();
    }, 5000);
}

function showPopup() {
    // Criar um elemento de div para o popup
    var popup = document.createElement('div');
    popup.className = 'popup';
    
    // Adicionar o conteúdo do popup
    var popupContent = document.createElement('p');
    popupContent.textContent = 'Visite nossa lista de presentes virtual! noivos.casar.com/isli-e-ruan';
    popup.appendChild(popupContent);

    // Adicionar o popup ao corpo do documento
    document.body.appendChild(popup);

    // Remover o popup após algum tempo (opcional)
    setTimeout(function() {
        document.body.removeChild(popup);
    }, 10000); // O popup será removido após 10 segundos (10000 milissegundos)
}
