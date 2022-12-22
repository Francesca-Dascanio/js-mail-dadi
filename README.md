# js-mail-dadi

==Esercizio Mail==

1. Chiedi all'utente la sua email
    - Inserisci prompt per raccogliere email utente
    - Siccome è case sensitive meglio convertire email utente in .toLowerCase 

2. Controlla che sia nella lista di chi può accedere
    - Crea lista di email da cui è poi possibile fare controllo (in .toLowerCase)
    - Prendi il valore inserito dall'utente in prompt
    - Verifica che il valore inserito dall'utente sia presente nella lista
    - Ciclo for per vedere se almeno 1 email corrisponde a quella inserita all'interno dell'array
3. SE valore inserito dall'utente è presente nella lista,  allora stampa un messaggio di ok sull'esito di controllo;
ALTRIMENTI stampa un messaggio di errore.


==Esercizio Dadi==

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1. Genero un numero random per il giocatore
2. Genero un numero random per il computer
3. Creo variabile vincitore
3. Confronto il numero del giocatore con il numero del computer
    - se numero giocatore > numero computer, allora vincitore = true
    (console ha vinto giocatore)
    - se numero computer > numero giocatore, allora vincitore = true
    (console ha vinto computer)