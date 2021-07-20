const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
];

let cont0 = 0,
    cont1 = 0,
    index0 = undefined,
    index1 = undefined;

for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i]["jogada"] === 0) {
        cont0++;
        index0 = i;
    } else if (jogadores[i]["jogada"] === 1) {
        cont1++;
        index1 = i;
    }
}

if (cont0 === 1) {
    console.log(jogadores[index0]["nome"]); 
} else if (cont1 === 1) {
    console.log(jogadores[index1]["nome"]);
} else {
    console.log("NINGUEM");
}

