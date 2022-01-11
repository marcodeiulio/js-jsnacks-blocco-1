// # SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let validation = true;

for (let i = 0; i < 10; i++) {
	const number = parseInt(prompt('Aggiungi un numero.', '3').trim());
	if (!isNaN(number)) {
		sum += number;
	} else {
		validation = false;
	}
}

if (!validation) console.log('Almeno uno dei valori immessi non è valido.');

console.log('La somma finale è: ', sum);