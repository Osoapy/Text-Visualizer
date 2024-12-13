function findOccurrences() {
    const input = document.getElementById('userInput').value;
    const searchWord = document.getElementById('searchWord').value;
    const lines = input.split('\n');

    const occurrences = lines.map((line, index) => {
        if (line.includes(searchWord)) {
            return `Line ${index + 1}: ${line}`;
        }
        return null;
    }).filter(line => line !== null);

    const resultDiv = document.getElementById('result');
    if (occurrences.length > 0) {
        resultDiv.innerHTML = `Occurrences found:<br>${occurrences.join('<br>')}`;
    } else {
        resultDiv.textContent = 'No occurrences found.';
    }
}

function deleteLines() {
    const input = document.getElementById('userInput').value;
    const searchWord = document.getElementById('searchWord').value;
    const lines = input.split('\n');

    const filteredLines = lines.filter(line => !line.includes(searchWord));

    document.getElementById('userInput').value = filteredLines.join('\n');
    document.getElementById('result').textContent = 'Lines containing the word were deleted.';
}