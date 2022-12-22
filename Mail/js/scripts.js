
// PRIMA VERSIONE ESERCIZIO 
// _____________________________________________________________________________________
// Chiedi all'utente di scrivere la sua mail
const mail = prompt('Inserisci la tua mail');
console.log(mail);

// Crea variabile per riconoscere solo valori in Lowercase
const mailLower = mail.toLowerCase();
console.log(mailLower);

// Definisci lista di email accettate 
                    // 0                   1               2               3
const lista = ["giovanna.reale", "mario.rossi", "carlo.bianchi", "fra.dascanio"];
console.log(lista);

// // Se la tua mail è uguale a uno degli elementi all'interno della lista allora ok, altrimenti errore
// if (mailLower == lista[0]) {
//     alert("L'inserimento della tua mail è avvenuto con successo!");
// }
// else if (mailLower ==lista[1]) {
//     alert("L'inserimento della tua mail è avvenuto con successo!");
// }
// else if (mailLower ==lista[2]) {
//     alert("L'inserimento della tua mail è avvenuto con successo!");
// }
// else if (mailLower ==lista[3]) {
//     alert("L'inserimento della tua mail è avvenuto con successo!");
// }
// else {
//     alert("La tua mail è errata. Aggiorna la pagina e riprova!");
// }


// SECONDA VERSIONE ESERCIZIO 
// _____________________________________________________________________________________
for (let i = 0; i < lista.length; i++) {

    // Voglio stampare solo la mail presente nell'array
    // Una mail è uguale ad un elemento dell'array se tutte le lettere corrispondono?
    if (mailLower == lista[i]) {
        console.log(mailLower, 'è ok');
        alert("L'inserimento della tua mail è avvenuta con successo");
    }
    else {
        console.log(mailLower, 'è errata');
        alert("La tua mail è errata. Aggiorna la pagina e riprova!");
    }

    
    

}
