const input = 
`5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7
`;

/*const input =
`3
0 0
0 3
4 0
`*/

const linhas = input.trim().split("\n");
const n = linhas[0];

const coordenadas = [];
for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0]),
        y: parseFloat(coord[1])
    });
}

let maiorDistancia = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const distancia = Math.sqrt((coordenadas[j]["x"] - coordenadas[i]["x"]) ** 2 + (coordenadas[j]["y"] - coordenadas[i]["y"]) ** 2);
        if (distancia > maiorDistancia) {
            maiorDistancia = distancia;
        }
    }
}


console.log(maiorDistancia);

