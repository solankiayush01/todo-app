<template>
<div>
    <h1>TODO List....</h1>
    <h2>SIGN-IN Here</h2>
    <p v-if="errorState">Invalid username or password!!<p>
    <div id = "signinForm">
        <form @submit.prevent="submitDetails">
      <label for="username">Username/E-mail Id:</label><br>
      <input type="text" id = "username" placeholder="ayush solanki" v-model="email"><br>
      <label for="upassword">Password:</label><br>
      <input type="password" id="upassword" v-model="password"><br>
      <button type="submit">SIGN-IN</button><br>
      </form>
      <a href="#">Forgot Password? click here</a>

    </div>
</div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import {mapState} from 'vuex';
export default {
  components:{
  
  },
  created(){
    firebase.auth().onAuthStateChanged(user =>{
                    this.$store.state.logged = !!user;
                    console.log(this.$store.state.logged)
                    this.$store.state.state = !!user;
                    this.$store.state.visible = !user;
                    this.$store.state.underline = !!user;
                    this.$store.state.bgState= !!user;
                  })
},
  computed:{
    email:{
        get(){
            return this.$store.state.email;
        },
        set(value){
            this.$store.commit('trackEmail',value)
        }
    },
    password:{
        get(){
        return this.$store.state.password;
        },
        set(value){
            this.$store.commit('trackPassword',value);
        }
    }
  },
  data () {
    return {
       errorState:false
  }
  },
  methods:{
    submitDetails(){
          firebase.auth().signInWithEmailAndPassword(this.$store.state.email,this.$store.state.password)
          .then(user=>{
              console.log(user);
              this.$router.replace({name:'home'})
           },
         err =>{
             this.errorState = true
         }
          );
  
   },
  //submitDetails(){
//       this.$store.commit('submitDetails');
//   }
   }
    }


</script>
<style scoped>
div{
    height:100%;
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
#signinForm{
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
   margin-left:30%;
}
input{
    padding:1em;
}
input[type="text"],input[type="password"]{
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
p{
    color : #f76157;
    font-size: 1.2em;
}
</style>
