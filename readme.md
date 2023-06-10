PROBLEMA:
Rifare l'esercizio della to do list visto a lezione. Create un array di oggetti ( con proprietà text e done )che rappresentano le task e mostratele a schermo. Aggiungete poi le funzionalità di cambio dello stato del task (cambiate il valore di done), eliminazione di una task ed aggiunta di una nuova task.

SOLUZIONE:
1 - Creare il markup statico della pagina;
2 - Creare la struttura di vuejs;
3 - Aggiungere l'array di oggetti nel data con due proprietà text e done;
4 - Aggiungere al div il v-for per mostrare a schermo le task;
5 - Creare un controllo per vedere se done è true o false;
    5.1 - ? SE è true applicare la classe line;
    5.2 - : ALTRIMENTI nulla
5 - Creare un controllo;
    5.1 - ?SE il valore di done è uguale a false mostra una la classe x;
    5.2 - : ALTRIMENTI inserisci la classe check;
6 - Implementare il cambio da true a false e viceversa;
    6.1 - Applicare al button un evento al click;
    6.2 - 
6 - Implementare l'elimininazione di una task;
    6.1 - In un button collegare un evento al click  alla funzione per eliminare la task;
    6.2 - Creare la funzione per eliminare la task
7 - Implementare l'aggiunta di una task;
    7.1 Utilizzare in un input il v-model per digitare una nuova task;
    7.2 - Aggiungere una funzione per poter aggiungere una task;
8 - Implementare il cambio di stato di una task;
    8.1 - Creare una funzione per poter modificare lo stato della task da false a true o viceversa;