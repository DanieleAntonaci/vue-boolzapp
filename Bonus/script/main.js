const { createApp } = Vue;
let DateTime = luxon.DateTime;
let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeUser: 0,
            newMessage: '',
            userSearch: '',
            messageHidden: false,
            positionMessageMenu: 0,
            answers: [
                'Ok!',
                'Buonasera, tutto bene?',
                'Ciao, che fai?',
                'Da quanto tempo',
                'Ehi',
                'Ehi, che si dice',
                'Weh',
                'Ei',
                ':)'

            ],


            darkMode: true,
            classDarkMode: '',
            classAppDarkMode: '',
            darkModeApp: 'backgroungLinear'

        }
    },
    methods: {
        // select user 
        selectUser(indexElement) {
            this.activeUser = indexElement;

            // reset class drop down in messages
            let arrayMessage = document.querySelectorAll('.drop-down-menu');
            arrayMessage[this.positionMessageMenu].classList.remove('visible')
        },
        // add new message to the user selected and response message 'ok!'
        addNewMessage() {


            if (/[0-9]/.test(this.newMlessage) || /[a - zA - Z] /.test(this.newMessage) || format.test(this.newMessage)) {
                // if (this.newMessage !== '' && this.newMessage !== ' ') {
                this.contacts[this.activeUser].messages.push({
                    date: DateTime.now().toISODate() + ' ' + nowHour[0],
                    message: this.newMessage,
                    status: 'sent'
                });
                this.newMessage = '';

                // response message after 1 sec 
                setTimeout(() => {
                    let nowHourResponse = DateTime.now().toISOTime().split('.')
                    this.contacts[this.activeUser].messages.push({
                        date: DateTime.now().toISODate() + ' ' + nowHourResponse[0],
                        message: this.answers[Math.floor(Math.random() * this.answers.length)],
                        status: 'received'
                    })
                }, 1500);
            }
        },
        dropDownVisible(index) {

            let arrayMessage = document.querySelectorAll('.drop-down-menu');

            if (this.positionMessageMenu !== index) {
                if (arrayMessage[this.positionMessageMenu]) {
                    arrayMessage[this.positionMessageMenu].classList.remove('visible')
                    this.positionMessageMenu = index;

                    arrayMessage[index].classList.add('visible')
                } else {
                    this.positionMessageMenu = index;

                    arrayMessage[index].classList.add('visible')

                }
            } else {
                arrayMessage[index].classList.toggle('visible')
            }
        },
        delateMessage(index) {
            this.contacts[this.activeUser].messages.splice(index, 1)

        },
        inputToLowerCaseSerach() {
            let searchLower = this.userSearch.toLowerCase();
            return searchLower
        },
        inputToLowerCaseUser(user) {
            let userLower = user.name.toLowerCase();
            return userLower
        },
        changeMode() {
            this.darkMode = !this.darkMode
            console.log(this.darkMode);
            if (!this.darkMode) {
                this.classDarkMode = 'dark';
                this.darkModeApp = 'classDarkModeApp'
            } else {
                this.classDarkMode = '';
                this.darkModeApp = 'backgroungLinear'

            }
        }

    },
    mounted() {

    }
}).mount('#app');
