<template>
  <div>
   <h1>TODO App....</h1>
   <h2>About us</h2>
   <p>Todo app is a platofeom where you can make your own list of day to day work.Here You can add
       your list items and make sure you have cimpleted them on time.This app is all about making your more
       effecient.You can use it for workplace, schools work,be more organised and never forget things.
   </p>
   <h2>Some benefits of using this todo app..</h2>
   <ol>
    <li>Be more organised</li>
    <li>Be more effecient</li>
    <li>Never forget things</li>
    <li>At workplace</li>
   </ol>
   <h3>So! what are you waiting for create your account for free!!!<span @click="goToSignup">Create an account.</span>
   </h3>

   </div>
 
</template>

<script>

export default {
  components:{
  
  },
  data () {
    return {
      
  }
  },
  methods:{
    goToSignup(){
        this.$router.replace({name:"signup"})
    }
   },
  
created(){
 
}
}
</script>
<style scoped>
div{
    background-color: grey;
    width: 70%;
    height: auto;
    margin: 0 auto;
    text-align: center;
    font-family: cursive;
    line-height: 2em;
}
h1{
    font-size:4em;
}
h2{
    border: 2px solid black;
    width:30%;
    margin:0 auto;
}

li{
    background-color: lightgray;
    padding:3em;
    margin-bottom:2em;
    width:70%
}
span{
  color:purple;
  text-decoration: underline;
  }
</style>
