// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

const logHoeraJa = ['Hoera!', 'Hoera!', 'Hoera!'];
for (let i = 0; i<3; i++) {
    console.log(logHoeraJa[i]);
}

/*/!*___Of:___*!/

const logHoera = ['Hoera!'];

for (let i = 0; i<3; i++) {
    console.log(logHoera);
}*/

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================
const logLoop = ['loop...', 'loop...', 'loop...', 'loop...', 'Klaar!'];

for (let i = 0; i < logLoop.length; i++) {
    console.log(logLoop[i]);

}

/*___Of:___*/

for (let i = 0; i < 5; i++) {
    if (i < 4) {
        console.log("loop...");
    } else {
        console.log("klaar!");
    }
}
// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over. Google daarom eens naar 'mdn webdocs remainder operator'.
// ==========================================
const evensOdds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


for (let i = 0; i < evensOdds.length; i++) {
    if (evensOdds[i] % 2 === 0) {
        console.log(evensOdds[i] + ' is even')
    } else {
        console.log(evensOdds[i] + ' is oneven')
    }
}

/*console.log(evensOdds[2]);*/

// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
const bonus = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < bonus.length; i++) {
    if (bonus[i] < 3) {
        console.log(bonus[i]);
    }
    if (bonus[i] > 2 && bonus[i] < 6) {
        console.log('>' + bonus[i]);
    }
    if (bonus[i] > 5) {
        console.log('>>' + bonus[i]);
    }
}
