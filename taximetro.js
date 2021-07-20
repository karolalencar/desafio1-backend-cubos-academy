const min = 25,
    km = 11.5;

let valorTotalMin = 0,
    valorTotalKm = 0,
    valorTotal = 0;

if (min <= 20) {
  valorTotalMin = min * 50;
} else {
    valorTotalMin = 20 * 50 + (min - 20) * 30;
}

if (km <= 10) {
    valorTotalKm = km * 70;
} else {
    valorTotalKm = 10 * 70 + (km - 10) * 50;
}

valorTotal = valorTotalMin + valorTotalKm;

console.log(Math.floor(valorTotal));