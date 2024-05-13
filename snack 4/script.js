// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.


const nomiInvitati = ['Riccardo', 'Giovanni', 'Nicola', 'Mario']
let scriviNome = prompt('Scrivi il tuo nome per la festa')

if (nomiInvitati === scriviNome) {
    console.log('Benvenuto alla festa!!');
} else {
    console.log('Il tuo nome non è nella lista. Addio!')
}

