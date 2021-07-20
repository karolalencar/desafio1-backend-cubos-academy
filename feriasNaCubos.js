const input = "4 0 2 3";

let grupos = input.split(" "),
    grupoDe1 = parseInt(grupos[0]),
    grupoDe2 = parseInt(grupos[1]),
    grupoDe3 = parseInt(grupos[2]),
    grupoDe4 = parseInt(grupos[3]);

let qntdCarros = 0;

if (grupoDe1 >= grupoDe3) {
    qntdCarros += grupoDe3;
    grupoDe1 -= grupoDe3;
} else {    
    qntdCarros += grupoDe3;
    console.log(`grupode3: ${grupoDe3} qntCarros: ${qntdCarros}`);
}

if ((grupoDe2 * 2) % 4 === 0) {
    qntdCarros += grupoDe2 / 2;
} else {
    qntdCarros += (grupoDe2 - 1) / 2;
    grupoDe2 = 1;
}

if (grupoDe2 === 1) {
    if (grupoDe1 === 0) {
        qntdCarros++;
    } else {
        if (grupoDe1 <= 2) {
            qntdCarros++;
        } else {
            qntdCarros++;
            grupoDe1 -= 2;
            c
            qntdCarros += Math.ceil(grupoDe1 / 4);
            console.log(`aqui`);
        }
    }
} else {
    qntdCarros += Math.ceil(grupoDe1 / 4);
}

qntdCarros += grupoDe4;

console.log(qntdCarros);