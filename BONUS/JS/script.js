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
                    done: true,
                    edit: false
                },
                {
                    text: 'Comprare la tv',
                    done: false,
                    edit: false
                },
                {
                    text: 'Fare l\'esercizio',
                    done: true,
                    edit: false
                },
                {
                    text: 'Preparare il pranzo',
                    done: false,
                    edit: false
                },
                {
                    text: 'Appendere la tenda',
                    done: true,
                    edit: false
                },
                {
                    text: 'Ascoltare la musica',
                    done: false,
                    edit: false
                },
                {
                    text: 'Suonare la batteria',
                    done: true,
                    edit: false
                },
                {
                    text: 'Andare in palestra',
                    done: false,
                    edit: false
                },
                {
                    text: 'Mettere il diesel',
                    done: false,
                    edit: false
                }
            ],
            new_task: ''
        }
    },
    methods: {
        change(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        remove(index){
            this.tasks.splice(index, 1)
        },
        add_task(){
            let obj ={
                        text: this.new_task,
                        done: false
                    }
            this.tasks.push(obj);
            this.new_task = ''
        },
        modified_task(index){
            this.tasks[index].edit = !this.tasks[index].edit
        }
    },
}).mount('#app');