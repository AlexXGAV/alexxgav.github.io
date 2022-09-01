const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const btnCopy = document.querySelector(".copy");
btnCopy.style.display = "none";


const matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];



function btnEncrypt() {
    const textEncrypt = encrypt(inputText.value);
    outputText.value = textEncrypt;
    outputText.style.backgroundImage = "none";
    inputText.value = "";
    btnCopy.style.display = "block";
}

function encrypt(stringEncrypt) {

    stringEncrypt = stringEncrypt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncrypt.includes(matrixCode[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(
                matrixCode[i][0],
                matrixCode[i][1]
            );
        }
    }
    return stringEncrypt;
}

function btnDecrypt() {
    const textEncrypt = decrypt(inputText.value);
    outputText.value = textEncrypt;
    outputText.style.backgroundImage = "none";
    inputText.value = "";
    btnCopy.style.display = "block";
}

function decrypt(stringDecrypt) {

    stringDecrypt = stringDecrypt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (let i = 0; i < matrixCode.length; i++) {
        if (stringDecrypt.includes(matrixCode[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(
                matrixCode[i][1],
                matrixCode[i][0]
            );
        }
    }

    return stringDecrypt;
}

function copy() {
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
    outputText.value = "";
    outputText.style.backgroundImage = 'url("img/figure.png")';
    inputText.focus();
    alert("Texto Copiado");
}
