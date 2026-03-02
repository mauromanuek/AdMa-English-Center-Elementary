// Navegação entre as seções (Mapa, Unidades, Certificado)
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section, #map-section');
    sections.forEach(sec => sec.classList.remove('active'));
    sections.forEach(sec => sec.classList.add('hidden'));

    // Mostra a seção desejada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
    
    // Rola para o topo
    window.scrollTo(0, 0);
}

// Simulação de Áudio (Usa a síntese de voz nativa do navegador)
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'en-US'; // Define o idioma para inglês
        msg.rate = 0.9; // Um pouco mais lento para crianças entenderem
        window.speechSynthesis.speak(msg);
    } else {
        alert("Audio: " + text); // Fallback para navegadores sem suporte
    }
}

// Validação de Respostas - Unit 1 Grammar
function checkAnswers() {
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    const q2 = document.getElementById('q2').value.trim().toLowerCase();
    const feedback = document.getElementById('practice-feedback');

    if (q1 === 'am' && q2 === 'are') {
        feedback.innerHTML = "🌟 Excellent! Great job!";
        feedback.style.color = "green";
        playAudio("Excellent! Great job!");
    } else {
        feedback.innerHTML = "Oops! Try again. Remember: 'I am' and 'You are'.";
        feedback.style.color = "red";
    }
    feedback.style.fontWeight = "bold";
    feedback.style.marginTop = "10px";
}

// Lógica do Game Zone (Name Game)
function playNameGame() {
    const input = document.getElementById('game-input').value.trim().toUpperCase();
    if (input.startsWith('A')) {
        alert('🎉 Awesome! "' + input + '" is a beautiful name!');
        playAudio("Awesome!");
    } else {
        alert('Try again! Think of a name that starts with the letter A (like Alex or Anna).');
    }
}
