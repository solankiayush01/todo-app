<template>
<div id = "app">
  <header>
    <div id="status" :class="{bg:bgState}">
    Logged In:
    <span v-if="logged">Yes</span>
    <span v-else>No</span>
    </div>
    <nav>
      <ol>
        <li v-if="state"  @click="goToHome">Home</li>
         <li @click="goToAboutus">About-us</li>
        <li @click="goToSignin" v-if="visible">Sign-in</li>
        <li @click="goToSignup" v-if="visible">Sign-up</li>
        <li @click="signOut" v-if="state">Sign-out</li>
       </ol>
          
          
    </nav>
  </header>
  <try></try>
  <try2></try2>
  <router-view></router-view>
  <footer>
    <h2>Todo App....</h2>
    <pre>
      created By: Ayush Solanki
      Copyright:&copy;Ayush Solanki
      Contact:9983883289
      E-Mail: ayush10@gmail.com

    </pre>
    <p>You can also Join using:</p>
      <ol>
        <li><a href="www.google.com">Google</a></li>
        <li><a href="www.facebook.com">Facebook</a></li>
        <li><a href="www.twitter.com">Twitter</a></li>
        <li><a href="www.instagram.com">Instagram</a></li>
      </ol>
  </footer>
 </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  components:{
  
  },
  data () {
    return {
      logged:false,
      state:false,
      visible:true,
      underline:false,
      bgState:false
  }
  },
  methods:{
   signOut(){
     try{
         const data = firebase.auth().signOut();
         console.log(data);
         this.$router.replace({name:"signin"})
     }catch(err){
       consoel.log(err);
     }
     
   },
   goToSignup(){
         this.$router.replace({name:"signup"});
     },
     goToSignin(){
       this.$router.replace({name:"signin"});
     },
     goToHome(){
       this.$router.replace({name:"home"});
     },
     isUnderlined(){
       if(this.$router.name="home"){
          this.underline = true;
       }
        if(this.$router.name="signin"){
          this.underline = true;
       }
     },
     goToAboutus(){
         this.$router.replace({name:"aboutus"});
     },

},
created(){
  firebase.auth().onAuthStateChanged(user =>{
    this.logged = !!user;
    this.state = !!user;
    this.visible = !user;
    this.underline = !!user;
    this.bgState= !!user;
  })
}
}
</script>
<style scoped>
header{
  background-color: grey;
}
 nav{
   background-color:grey;
   color:white;
 }
 ol{
   text-decoration: none;
   text-align: right;
   padding:2em;
 }
 li{
   display: inline;
   font-size:1.3em;
   padding-right: 2em;
   padding-bottom: 2em;
 
 }
a{
    color:white;
}
footer{
  height: 100%;
  color:white;
  background-color:black;

}
footer h2{
  font-size:4em;
}
footer p{
  text-align:center
}
footer ol{
  text-align: center;
}
.underline{
  text-decoration:underline;
}
li:hover{
  text-decoration: underline;
}
#status{
  width:10%;
  border: 3px solid black;
  padding:1.2em;
  font-size:1.3em;
}
.bg{
  background-color: lightgray;
  color: red;
}
</style>
