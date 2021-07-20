const lista = [12, 16, 15, 14, 17, 13, 33, 66, 78];

const maiorIdade = lista.filter(x => x >= 18)

maiorIdade.sort((a, b) => a - b);

if (maiorIdade.length > 0) {
    console.log(maiorIdade[0]);
} else {
    console.log("CRESCA E APARECA");
}
