"use strict"

const {createApp} = Vue;

createApp({
    data(){
        return{
            title_app: 'VUE TO DO LIST',
            title_task: 'To Do List',
            tasks: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Comprare la tv',
                    done: false
                },
                {
                    text: 'Fare l\'esercizio',
                    done: true
                },
                {
                    text: 'Preparare il pranzo',
                    done: false
                },
                {
                    text: 'Appendere la tenda',
                    done: true
                },
                {
                    text: 'Ascoltare la musica',
                    done: false
                },
                {
                    text: 'Suonare la batteria',
                    done: true
                },
                {
                    text: 'Andare in palestra',
                    done: false
                },
                {
                    text: 'Mettere il diesel',
                    done: false
                }
            ]
        }
    },
    methods: {
        change(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        remove(index){
            this.tasks.splice(index, 1)
        }
    },
}).mount('#app');