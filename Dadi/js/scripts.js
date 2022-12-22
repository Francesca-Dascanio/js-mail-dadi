const nPlayer = Math.floor(Math.random() * 10) +1;
console.log('Numero giocatore', nPlayer);

const nLaptop = Math.floor(Math.random() * 10) +1;
console.log('Numero computer', nLaptop);

let vincitore = false;

if (nPlayer > nLaptop) {
    vincitore = true;
    console.log('Il vincitore è il giocatore!');
}
else if (nPlayer < nLaptop) {
    vincitore = false;
    console.log('Il vincitore è il computer!');
}
else if (nPlayer == nLaptop) {
    vincitore = true;
    console.log('Sono entrambi vincitori!');
}