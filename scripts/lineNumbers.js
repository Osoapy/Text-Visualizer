const textarea = document.getElementById('userInput');
const lineNumbers = document.getElementById('lineNumbers');

// Função para atualizar os números de linha
function updateLineNumbers() {
    const lines = textarea.value.split('\n').length;
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        const lineNumber = document.createElement('span');
        lineNumber.textContent = i;
        lineNumbers.appendChild(lineNumber);
    }
}

// Adiciona eventos para atualizar os números de linha
textarea.addEventListener('input', updateLineNumbers);
textarea.addEventListener('scroll', () => {
    lineNumbers.scrollTop = textarea.scrollTop;
});

// Inicializa os números de linha
updateLineNumbers();