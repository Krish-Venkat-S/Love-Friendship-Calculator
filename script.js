function calculateFriendship() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('resultText');
    const resultEmojiElement = document.querySelector('.result-emoji');

    if (!name1 || !name2) {
        alert('Please enter both names!');
        return;
    }

    let combinedName = name1 + name2;
    let uniqueChars = [...new Set(combinedName)];
    let repeatedChars = combinedName.length - uniqueChars.length;
    
    let basePercentage = calculateBasePercentage(name1, name2);
    let finalPercentage = Math.min(basePercentage + (repeatedChars * 5), 100);

    displayResult(finalPercentage);
}

function calculateBasePercentage(name1, name2) {
    const totalLength = name1.length + name2.length;
    const nameSimilarity = calculateNameSimilarity(name1, name2);
    
    let baseScore = (nameSimilarity / totalLength) * 100;
    return Math.round(baseScore);
}

function calculateNameSimilarity(name1, name2) {
    const commonChars = new Set(name1.split('').filter(char => name2.includes(char)));
    return commonChars.size;
}

function displayResult(percentage) {
    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('resultText');
    const resultEmojiElement = document.querySelector('.result-emoji');

    resultElement.style.display = 'block';
    resultTextElement.textContent = `${percentage}% Friendship`;

    let emoji = '';
    if (percentage < 30) emoji = '😕';
    else if (percentage < 50) emoji = '🤔';
    else if (percentage < 70) emoji = '😊';
    else if (percentage < 90) emoji = '❤️';
    else emoji = '💖';

    resultEmojiElement.textContent = emoji;
}

function toggleInfo() {
    const infoContent = document.querySelector('.info-content');
    const computedStyle = window.getComputedStyle(infoContent);
    
    if (computedStyle.display === 'none') {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    }
}