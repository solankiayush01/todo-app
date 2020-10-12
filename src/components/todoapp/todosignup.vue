<template>
<div>
    <h1>TODO List....</h1>
    <h2>SIGN-UP form</h2>
    <div id = "forms">
    <form @submit.prevent= "submitDetails">
      <label for="username">User Name:</label><br>
      <input type="text" id = "username" placeholder="ayush solanki"><br>
      <label for="upassword">Password:</label><br>
      <input type="password" id="upassword"  v-model="signUpPassword"><br>
      <label for="email_id">E-Mail Id:</label><br>
      <input type="email" id="email_id" placeholder="ayush solanki@gamil.com"  v-model="signUpEmail"><br>
      <label for="mobileNo">Mobile No:</label><br>
      <input type="tel" id="mobileNo" placeholder="99849839481"><br>
      <label>Purpose of using this App:</label><br>
      <input type="checkbox" value="organized" checked>To be more organized<br>
      <input type="checkbox" value="remember">To remember things<br>
      <input type="checkbox" value="workplace">For workplace<br>
      <input type="checkbox" value="forget">Never forget things<br>
      <label for="notifications">Do you want to recieve notifications?</label><br>
      <input type="radio" name="notifi" value="Yes" checked>Yes<br>
     <input type="radio" name="notifi" value="No"> No<br>
      <button type="submit">Submit</button>
    </form>
    </div>
</div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  components:{
  
  },
  computed:{
      signUpEmail:{
          get(){
              return this.$store.state.signUpEmail;
          },
          set(value){
              this.$store.commit('trackSignUpEmail',value)
          }
       },
       signUpPassword:{
           get(){
              return this.$store.state.signUpPassword;
           },
           set(value){
               this.$store.commit('trackSignUpPassword',value)
           }
       }
  },
  data () {
    return {
      
  }
  },
  methods:{
    submitDetails(){
        try{
             const user = firebase.auth().createUserWithEmailAndPassword(this.$store.state.email,
             this.$store.state.password);
             this.$router.replace({name:"home"})
        }catch(err){
          console.log(err);
        }
      
    }
}
}

</script>
<style scoped>

div{
    height:auto;
    background-color: grey;
    text-align: center;
}
h1{
    font-size: 4em;
    font-family: cursive;
}
h2{
    border:2px solid black;
    margin:0 auto;
    width:30%;
}
form{
    background-color: #42403c;
    color: white;
  
}
#forms{
    width:70%;
    text-align: left;
    margin: 0 auto;
    border-radius:34px;
    padding:2em;
}
label{
    font-weight: bold;
    font-size:1.4em;
    font-family: cursive;
}
label,input{
   margin-bottom: 2em;
   margin-left:3em;
}
input{
    padding:1em;
}
input[type="text"],input[type="email"],input[type="tel"],input[type="password"]{
    width:30%;
    border-radius:4px;
}
button{
    margin-left:40%;
    border-radius:5em;
    padding:1.3em;
    font-weight:bold;
    text-align: center;
}
button:hover{
    background-color:grey ;

}
</style>
