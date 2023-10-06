const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      newArray: [],
      numberMail: 10
    }
  },

  methods: {

    getApi(numberMail){
      for (let index = 0; index < numberMail; index++) {

        axios.get(this.apiUrl)

          .then((risposta) => {
            this.newArray.push(risposta.data.response);
          })
          
          .catch((error) => {
            console.log(error)
        });
      }
    }
    
  },

  mounted() {

    this.getApi(this.numberMail);
    console.log(this.newArray)

  },


}).mount('#app');