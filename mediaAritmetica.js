const numeros = [2, 3, 4];

const soma = numeros.reduce((acumulador, atual) => {
    acumulador = acumulador + atual;
    return acumulador;
});

const mediaAritmetica = soma / numeros.length; 

console.log(mediaAritmetica);