const numeros = [1, 1, 1, 1, 1, 7];

const soma = numeros.reduce((acc, atual) => acc + atual);

if (soma % numeros.length === 0) {
    goleiro = numeros.length;
} else {
    goleiro = soma % numeros.length;
}

console.log(goleiro);



