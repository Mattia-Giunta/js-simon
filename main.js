// Descrizione:

// fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Consigli del giorno:

// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:

// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

// Imposta la data di fine del conto alla rovescia (09:30 di domani)
const endDate = new Date();
endDate.setDate(endDate.getDate());
endDate.setHours(9, 30, 0, 0);

// Funzione per aggiornare il conto alla rovescia
function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelector('.hours .first .number').textContent = Math.floor(hours / 10);
    document.querySelector('.hours .second .number').textContent = hours % 10;

    document.querySelector('.minutes .first .number').textContent = Math.floor(minutes / 10);
    document.querySelector('.minutes .second .number').textContent = minutes % 10;

    document.querySelector('.seconds .first .number').textContent = Math.floor(seconds / 10);
    document.querySelector('.seconds .second .number').textContent = seconds % 10;
}



// Aggiorna il conto alla rovescia ogni secondo
setInterval(updateCountdown, 1000);

// Chiamata iniziale per evitare il ritardo di un secondo
updateCountdown();

// Termianto esercizio