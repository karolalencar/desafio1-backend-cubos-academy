const min = 2,
      max = 10,
      valores = [0, 5, 6, 10, 11];

const valoresAceitos = valores.filter(x => x >= min && x <= max);

console.log(valoresAceitos);