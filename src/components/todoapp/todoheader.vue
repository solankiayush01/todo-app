<template>
 <div>
    <header>
    <div id="status" :class="{bg:bgState}">
        Logged In:
        <span v-if="logged">Yes</span>
        <span v-else>No</span>
    </div>
    <nav>
        <ol>
            <li v-if="state"  @click=" changeRoute('home')">Home</li>
            <li @click=" changeRoute('aboutus')">About-us</li>
            <li @click=" changeRoute('signin')" v-if="visible">Sign-in</li>
            <li @click=" changeRoute('signup')" v-if="visible">Sign-up</li>
            <li @click="signOut" v-if="state">Sign-out</li>
        </ol>
          
    </nav>
  </header>
 </div>    
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
     components:{
  
  },
  computed:{
   logged() {
     return this.$store.state.logged;
   },
   bgState(){
     return this.$store.state.bgState;
   },
   state(){
     return this.$store.state.state;
   },
   visible(){
     return this.$store.state.visible;
   }
  },
  data () {
    return {
     
  }
  },
  methods:{
   signOut(){
   this.$store.commit('signOut');
   this.$router.replace({name:"signin"})
     
   },
   //one function for changing the route
   changeRoute(value){
     this.$router.replace({name:value})
   }

},
created(){
 this.$store.commit('createNewUser');
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