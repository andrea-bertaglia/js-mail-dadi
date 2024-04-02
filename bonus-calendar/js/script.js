"use strict";

// Test
console.log("Hello World!");

// 1. Dichiaro le variabili
const days = ["Venerdì", "Sabato", "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì"]; // array
const sundays = [3, 10, 17, 24, 29, 30, 31]; // array

// Dichiaro una variabile per catturare l'elemento HTML
const rowElem = document.querySelector(".row"); // object | null
let nameDayResult = ""; // string | null
console.log(rowElem);

// Dichiaro una variabile di appoggio per gestire la classe relativa al background
let bgClass = ""; // string | null

// 2. Creo i cicli di 7 giorni
for (let i = 1; i <=7; i++) {
    
    nameDayResult = days[i - 1];

    if ((i === sundays[0]) || (i === sundays[1]) || (i === sundays[2]) || (i === sundays[3]) || (i === sundays[4]) || (i === sundays[5]) || (i === sundays[6])) {
        bgClass = "holiday";
    } else {
        bgClass = "others";
    }
    console.log(i);
    console.log(nameDayResult);
    
    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = `${nameDayResult} ${i} marzo`;
    // Aggiungo la classe comune a tutti
    colElem.classList.add("col");
    // Aggiungo la classe specifica del background
    colElem.classList.add(bgClass);

    // Stampo in console gli elementi
    console.log(colElem);  

    // Stampo in pagina gli elementi
    rowElem.append(colElem);
}

for (let i = 8; i <=14; i++) {
    
    nameDayResult = days[i - 8];
    
    if ((i === sundays[0]) || (i === sundays[1]) || (i === sundays[2]) || (i === sundays[3]) || (i === sundays[4]) || (i === sundays[5]) || (i === sundays[6])) {
        bgClass = "holiday";
    } else {
        bgClass = "others";
    }
    console.log(i);
    console.log(nameDayResult);
    
    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = `${nameDayResult} ${i} marzo`;
    // Aggiungo la classe comune a tutti
    colElem.classList.add("col");
    // Aggiungo la classe specifica del background
    colElem.classList.add(bgClass);

    // Stampo in console gli elementi
    console.log(colElem);  

    // Stampo in pagina gli elementi
    rowElem.append(colElem);
}

for (let i = 15; i <=21; i++) {
    
    nameDayResult = days[i - 15];

    if ((i === sundays[0]) || (i === sundays[1]) || (i === sundays[2]) || (i === sundays[3]) || (i === sundays[4]) || (i === sundays[5]) || (i === sundays[6])) {
        bgClass = "holiday";
    } else {
        bgClass = "others";
    }
    console.log(i);
    console.log(nameDayResult);
    
    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = `${nameDayResult} ${i} marzo`;
    // Aggiungo la classe comune a tutti
    colElem.classList.add("col");
    // Aggiungo la classe specifica del background
    colElem.classList.add(bgClass);

    // Stampo in console gli elementi
    console.log(colElem);  

    // Stampo in pagina gli elementi
    rowElem.append(colElem);
}

for (let i = 22; i <=28; i++) {
    
    nameDayResult = days[i - 22];
    
    if ((i === sundays[0]) || (i === sundays[1]) || (i === sundays[2]) || (i === sundays[3]) || (i === sundays[4]) || (i === sundays[5]) || (i === sundays[6])) {
        bgClass = "holiday";
    } else {
        bgClass = "others";
    }
    console.log(i);
    console.log(nameDayResult);
    
    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = `${nameDayResult} ${i} marzo`;
    // Aggiungo la classe comune a tutti
    colElem.classList.add("col");
    // Aggiungo la classe specifica del background
    colElem.classList.add(bgClass);

    // Stampo in console gli elementi
    console.log(colElem);  

    // Stampo in pagina gli elementi
    rowElem.append(colElem);
}

for (let i = 29; i <=31; i++) {
    
    nameDayResult = days[i - 29];
    
    if ((i === sundays[0]) || (i === sundays[1]) || (i === sundays[2]) || (i === sundays[3]) || (i === sundays[4]) || (i === sundays[5]) || (i === sundays[6])) {
        bgClass = "holiday";
    } else {
        bgClass = "others";
    }
    console.log(i);
    console.log(nameDayResult);

    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = `${nameDayResult} ${i} marzo`;
    // Aggiungo la classe comune a tutti
    colElem.classList.add("col");
    // Aggiungo la classe specifica del background
    colElem.classList.add(bgClass);

    // Stampo in console gli elementi
    console.log(colElem);  

    // Stampo in pagina gli elementi
    rowElem.append(colElem);
}