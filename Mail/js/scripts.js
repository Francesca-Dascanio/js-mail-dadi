// Chiedi all'utente di scrivere la sua mail
const mail = prompt('Inserisci la tua mail');
console.log(mail, typeof mail);
console.log(mail.toLowerCase());

// Definisci lista di email accettate 
const lista = ["giovanna.reale", "mario.rossi", "carlo.bianchi", "fra.dascanio"];
console.log(lista);
// console.log(lista[0]);

// Solo per vedere se tutto ok con array (a partire dall'array 0, considerando fino all'ultimo array, procedendo uno a uno)
for (let i = 0; i < 4; i = i + 1) {
    console.log('i', i, typeof i);
    console.log(lista[i]);

    if (mail == lista[i]) {
        alert("L'inserimento della tua mail è avvenuto con successo!");
    }
}







// const iscritti = ["Luca", "Marco", "Paolo"];
// console.log('iscritti', iscritti, typeof iscritti);
// console.log('Lunghezza array iscritti PRE', iscritti.length);


// for (let i = 0; i < iscritti.length; i++) {

//     console.log('i', i, typeof i);
//     console.log('Elemento in posizione i', iscritti[i], typeof iscritti[i]);

// }


