<template>
<div id = "mainDiv">
    <div id = "itemsBox">
        <h2>Here is your todo list...</h2>
        <ol id = "listContainer">
         <li v-for="(listItem,index) in listArr" :id='index' :key="index" @dblclick="updateItem(index),changeBackgroundColor(index)">
            {{listItem}}
            <button @click="removeItem(index)">X</button>
         </li>
        </ol> 
    </div>
 </div>
</template>


<script>

export default {
  components:{
  
  },
  computed:{
     listArr(){
         return this.$store.state.listArr;
     }
  },
  data () {
    return {
      
  }
  },
  methods:{
    removeItem(index){
      this.$store.commit('removeItem',index);
    },
    updateItem(index){
      this.$store.commit('updateItem',index)
    },
    changeBackgroundColor(value){
      document.getElementById(value).style.backgroundColor = "darkgrey";
    }
   
   },
  
created(){
 
}
}
</script>
<style scoped>
#mainDiv h1{
    padding:30px;
    background-color: black;
    color:white;
    text-align: center;
    font-family: cursive;
    font-size: 3em;

}
#itemsBox{
    background-color: grey;
    margin:0 auto;
    width:60%;
    border-radius:16px;
    padding-bottom:13px;
}
#userInput button:hover{
    background-color: darkgreen;
}
#itemsBox h2{
   margin-left:2em;
}
#listContainer li{
    background-color: lightgrey;
    padding: 30px;
    position: relative;
    margin: 2em;
    font-weight: bold;
    font-family: cursive;

}
#listContainer button{
    position: absolute;
    right:20px;
     background-color:darkred;
   
}
#listContainer button:hover{
    background-color: red;
}
</style>
