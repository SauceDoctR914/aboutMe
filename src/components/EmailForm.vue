<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() { 
    return { 
        userId: process.env.VUE_APP_EMAIL_USER_ID,
        serviceId: process.env.VUE_APP_EMAIL_SERVICE_ID,
        templateId: 'template_TExXNHT1'
    }
},
  methods: {
    sendEmail(e) {
      emailjs.sendForm(this.serviceId, this.templateId, e.target, this.userId)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  },
  created(){
    console.log(this.serviceId, this.serviceId)
  }
}
</script>
<style lang="scss">
  body {
    font-family: arial;
    font-size: 12px;
    color: #666;
  }
  form {
    width: 500px;
    background: white;
    padding: 20px 25px;
    margin: auto;
    margin-top: 30px;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  }
  form input,
  form textarea {
    font: inherit;
    padding: 5px 5px;
    width: 100%;
    margin-top: 3px;
    margin-bottom: 15px;
    box-sizing: border-box;
    color:#000;
    background: rgba(250,250,255,1);;
    border: 1px solid rgba(0,0,0,0.7);
  }
  form button {
    border: 1px solid rgba(0,0,0,0.2);
    padding: 8px 35px;
    font-size: 12px;
    background: #888;
    color: white;
  }
  form label {
    color: #777;
    font-size: 11px;
    margin-bottom: 2px;
    display: block;
  }
</style>