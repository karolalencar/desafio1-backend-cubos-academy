const precos = [200, 150, 50, 100];

let totalAPagar = 0;

if (precos.length === 1) {
    totalAPagar = precos[0];
} else if (precos.length === 2) {
    totalAPagar = precos[0] + precos[1];
} else {
    let menor = precos[0];

    for (let preco of precos) {
        if (preco < menor) {
            menor = preco;
        }
        totalAPagar += preco;
    } 
    totalAPagar -= menor * 0.5;

}

console.log(totalAPagar);




