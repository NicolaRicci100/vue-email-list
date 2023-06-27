console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
        return{
            mails: [],
        }
    },
    methods:{
        getRandomMail(){
            isLoading = true;
            for(let i = 0; i < 10; i++){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then(res => {
                    const randomMail = res.data.response;
                    this.mails.push(randomMail);
                })
            }
        }
    },
    created(){
        this.getRandomMail();
    }

}).mount('#root');