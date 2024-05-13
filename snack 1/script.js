// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let numeroUno = Number.parseInt(prompt('Scrivi un numero'), 10)
let numeroDue = Number.parseInt(prompt('Scrivi un numero'), 10)

if (numeroUno === numeroDue) {
    console.log(numeroUno, numeroDue);

} else if (numeroDue > numeroUno) {
    console.log(numeroDue);
} else {
    console.log(numeroUno)
}