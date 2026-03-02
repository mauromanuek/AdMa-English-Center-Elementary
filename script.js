// Navegação entre as seções
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section, #map-section');
    sections.forEach(sec => sec.classList.remove('active'));
    sections.forEach(sec => sec.classList.add('hidden'));

    // Mostra a seção clicada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
    
    // Rola a página para o topo automaticamente
    window.scrollTo(0, 0);
}

// Simulação de Áudio (Usa a voz em Inglês nativa do dispositivo)
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'en-US'; // Mantemos a voz em inglês para as palavras do vocabulário
        msg.rate = 0.9; // Velocidade um pouco menor para crianças acompanharem
        window.speechSynthesis.speak(msg);
    } else {
        alert("Áudio: " + text); // Caso o navegador não suporte
    }
}

// Validação de Respostas - Unit 1 Grammar
function checkAnswers() {
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    const q2 = document.getElementById('q2').value.trim().toLowerCase();
    const feedback = document.getElementById('practice-feedback');

    // A resposta correta do verbo 'to be' deve ser em inglês
    if (q1 === 'am' && q2 === 'are') {
        feedback.innerHTML = "🌟 Excelente! Bom trabalho!";
        feedback.style.color = "green";
        playAudio("Excellent! Great job!"); // Elogio em áudio no inglês
    } else {
        feedback.innerHTML = "Ops! Tente novamente. Lembre-se: 'I am' e 'You are'.";
        feedback.style.color = "red";
    }
    feedback.style.fontWeight = "bold";
    feedback.style.marginTop = "10px";
}

// Lógica do Game Zone (Jogo dos Nomes)
function playNameGame() {
    const input = document.getElementById('game-input').value.trim().toUpperCase();
    if (input.startsWith('A')) {
        alert('🎉 Incrível! "' + input + '" é um nome muito bonito!');
        playAudio("Awesome!");
    } else {
        alert('Tente de novo! Pense num nome que comece com a letra A (como Alex ou Anna).');
    }
}
