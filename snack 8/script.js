// Crea due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l'altro di verde. 
// Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 101, 102];

for (i = 0; i <= 10; i++) {
    if (array % 2===1) {
        let variabileuno = document.querySelector("#primoid");
        console.log(array);
    } else if (array % 2===0) {
        let variabiledue = document.querySelector("#secondoid");
        console.log(array);
    }
}