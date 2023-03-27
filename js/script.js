// Contador de caracteres
// Utilizar o keyup.

// Variavel que nos retorna o elemento textarea
const textArea = document.getElementById("textArea");

// Variavel que nos retorna o elemento div
const resultSum = document.getElementById("resultSum");

// Adicionamos um evento ao textoarea, o keyup.
// Ele é disparado quando alguma tecla é largada, sendo assim, sempre que alguém
// digitar no textarea, assim que soltar a tecla, nosso evento acontece.
textArea.addEventListener("keyup", () => {

    // Utilizamos o replace(/\s/g, '') para remover os espaços presente na string ( texto escrito pelo usuário ), 
    // pois queremos contar apenas os caracteres.
    var str = textArea.value.replace(/\s/g, '');

    // Variavel que conta o tamanho da string, sem os espaços.
    var sumCharacter = str.length;

    // Imprimindo na tela para o usuário, o resultado.
    resultSum.innerHTML = sumCharacter;

})
