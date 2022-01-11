console.log('Paperella is the way');

// # SNACK 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const firstNumber = parseInt((prompt('Digita un numero', '1').trim()));
const secondNumber = parseInt((prompt('Digita un altro numero', '3').trim()));
console.log(firstNumber);
console.log(secondNumber);

const pagePrint = document.getElementById('higher_number');

let message = `Il numero più alto è: `;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
	alert('Almeno uno dei valori inseriti non è valido. Ricaricare la pagina.');
	message = 'Almeno uno dei valori inseriti non è valido. Ricaricare la pagina.';
} else {
	if (firstNumber > secondNumber) {
		console.log(`Il maggiore è ${firstNumber}`);
		message += firstNumber;
	} else if (firstNumber < secondNumber) {
		console.log(`Il maggiore è ${secondNumber}`);
		message += secondNumber;
	} else {
		console.log(`I numeri ${firstNumber} e ${secondNumber} sono uguali.`);
		message = `I numeri ${firstNumber} e ${secondNumber} sono uguali.`
	}
}

pagePrint.innerText = message;