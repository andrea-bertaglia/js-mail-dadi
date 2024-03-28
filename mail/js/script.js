// Test
console.log("Hello World!");

// 1. Creo una lista di nominativi
const mailList = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"] // array
console.log(mailList);

// 2. Verifico se il nominativo è presente al click del bottone

// Dichiaro una variabile d'appoggio per il risultato
let result = false;

// Avvio la rilevazione del click
const checkButton = document.getElementById("conferma");
checkButton.addEventListener("click", function() {

    // Prelevo l'elemento input HTML necessario
    let userMail = document.getElementById("mail").value // string | null
    console.log(userMail);

    // Uso il ciclo for per verificare tutti gli elementi dell'array
    for(let i = 0; i < mailList.length; i++) {
            if (mailList[i] === userMail) {
                result = true;
            }  
        }

        // Stampo il risultato con alert
        if (result === true ) {
            alert("OK! Il tuo indirizzo è presente in lista");
        } else {
            alert("Indirizzo non trovato");
        }
})
