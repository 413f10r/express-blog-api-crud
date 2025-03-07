
// Esercizio
// Milestone 1
// Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.
// All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
// Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
// Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
// Se tutto funziona, passiamo alla prossima milestone

// Milestone 2
// Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.
// Ora passiamo ad implementare le logiche delle nostre CRUD:
// Index dovrà restituire la lista dei post in formato JSON
// Show dovrà restituire un singolo post in formato JSON
// Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

// Bonus
// Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
// In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
// Buon Lavoro e buon divertimento

const express = require("express"); // import express
const app = express(); //express funzione diventa una variabile
const port = 3000; //porta ns server
const cors = require("cors")

//leggere la cartella post router
const postRouter = require("./routers/postRouter");

const errorsHandler = require("./middlewares/errorsHandler")
const notFound = require("./middlewares/notFound")


app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.static('public')); // per file statici
app.use(express.json())//dati in formato json
app.use("/posts", postRouter); //richiamare le API 


app.use(notFound) // erorri nelle rotte 
app.use(errorsHandler) // i possibili errori dell'applicazione.




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




