console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
        return{
            randomMail: null
        }
    },

    created(){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(res => {
            this.randomMail = res.data.response;
        })
    }

}).mount('#root');