// Função para criptografar o texto
function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    displayResult(encryptedText);
}

// Função para descriptografar o texto
function decrypt() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    displayResult(decryptedText);
}

// Função para exibir o resultado na tela
function displayResult(text) {
    const ladoBText = document.querySelector('.lado_b_text');
    const ladoBText2 = document.querySelector('.lado_b_text2');
    
    if (text.trim() === '') {
        ladoBText.textContent = 'Nenhuma mensagem encontrada';
        ladoBText2.textContent = 'Digite um texto que você deseja criptografar ou descriptografar';
    } else {
        ladoBText.textContent = 'Mensagem:';
        ladoBText2.textContent = text;
    }
}
