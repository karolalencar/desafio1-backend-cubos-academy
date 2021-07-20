const input =
`cubos
cuggbyos`;

const arrayInput = input.trim().split("\n");

const senha = arrayInput[0];
let digitada = arrayInput[1];

for (let c of senha) {
    const index = digitada.indexOf(c);
    if (index === -1) {
        console.log("NAO");
        return;
    } else {
        digitada = digitada.substr(index + 1);
    }
}

console.log("SIM");