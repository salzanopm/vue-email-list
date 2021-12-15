// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// SVIPLUPPO

Vue.config.devtools = true;

const app = new Vue (
{
    el: '#root',
    data: {
        emailArray: []
    },
    methods: {
    },
    
     created: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const emailGenerated = response.data.response;
                this.emailArray
            });
            
        }
    }
);