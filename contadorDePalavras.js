const texto = "Um texto qualquer";

const palavras = texto.trim().split(" ");

let contador = 0;

for (let palavra of palavras) {
    if (palavra !== "") {
        contador++;
    }
}

console.log(contador);
