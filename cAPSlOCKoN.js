const input = `iMPRIMA A PALAVRA CORRIGIDA`;

if (input === input.toUpperCase()) {
    console.log(input.toLowerCase());
} else if (input[0] === input[0].toLowerCase() && input.substr(1).toUpperCase() === input.substr(1)) {
    console.log(input[0].toUpperCase() + input.substr(1).toLowerCase());
} else {
    console.log(input);
}