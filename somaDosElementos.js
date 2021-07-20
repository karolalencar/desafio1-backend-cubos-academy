const numeros = [3, 5, 1, 6];

const soma = numeros.reduce((acumulador, atual) => {
    acumulador = acumulador + atual;
    return acumulador;
});

console.log(soma);