// # SNACK 2
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
//! Non funziona!!!! La parola più lunga è sempre la stessa.

const pagePrint = document.getElementById('higher_number');

const firstWord = (prompt('Inserisci una parola', 'Pippo').trim());
const secondWord = (prompt("Inserisci un'altra parola", 'Pluto').trim());

const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

let message2 = `La parola più lunga è: `;
let lenghtiest = `Ed è lunga `;

if (!(isNaN(firstWord)) || !(isNaN(secondWord)) || firstWordLength === 0 || secondWordLength === 0) {
	alert('Una delle due parole inserite non è valida. Ricaricare la pagina.');
	message2 = 'Una delle due parole inserite non è valida. Ricaricare la pagina.';
	lenghtiest = '';
} else {
	if (firstWord > secondWord) {
		console.log(`La parola più lunga è ${firstWord}`);
		message2 += firstWord;
		lenghtiest += firstWordLength;
	} else if (firstWord < secondWord) {
		console.log(`La parola più lunga è ${secondWord}`);
		message2 += secondWord;
		lenghtiest += secondWordLength;
	} else {
		console.log(`Le parole ${firstWord} e ${secondWord} sono lunghe uguali.`);
		message2 = `Le parole ${firstWord} e ${secondWord} sono lunghe uguali.`;
		lenghtiest = `La loro lunghezza è di ${firstWordLength}.`;
	}
}

pagePrint.innerText = `${message2}
${lenghtiest}`;