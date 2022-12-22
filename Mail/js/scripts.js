
// Inizio 

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

// Verifica mail 
let elementoTrovato = false;

for (let i = 0; i < lista.length; i++) {

    // Voglio stampare solo la mail presente nell'array
    // Una mail è uguale ad un elemento dell'array se l'elemento trovato corrisponde a true
    if (mailLower == lista[i]) {
        console.log(mailLower, 'è ok');
        elementoTrovato = true;
    }
    
}

// Comunicazione all'utente
if (elementoTrovato == false) {
    alert("La tua mail è errata. Aggiorna la pagina e riprova!");
}
else {
    alert("L'inserimento della tua mail è avvenuto con successo!");
}


// Fine