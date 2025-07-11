// This is your external JavaScript file
console.log("External script loaded successfully!");

// Muda a cor de fundo do body
document.body.style.backgroundColor = '#f0f8ff';

// Adiciona um novo parágrafo
const newParagraph = document.createElement('p');
newParagraph.textContent = "Coisas ruins acontecem, para que quando coisas boas chegarem sejamos gratos e valorizemos ainda mais!";
document.body.appendChild(newParagraph);

// Adiciona um alerta quando a página carrega, de uma forma mais segura.
// Usar addEventListener é melhor porque não sobreescreve outras funções que possam ser disparadas no 'load'.
window.addEventListener('load', function() {
    alert("Bem-vinda à sua página, Thamires!");
});