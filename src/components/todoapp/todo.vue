<template>
<div id = "mainDiv">
    <h1>ToDo List......</h1>
    <p>Here you can make your own todo list for the day and never forget anything..</p>
    <h2>How to make your todo list?</h2>
    <p>Its very simple to create your todo list just folow these steps:</p>
    <ol>
        <li>Write your todo in the input box</li>
        <li>And press the add button.</li>
        <li>Simple :)</li>
    </ol>
       <div id = "userInput">
           <h3>Enter Your item here..</h3>
       <input type="text" v-model="todoList">
        <button @click="addItems">Add list item</button>
        <button v-show="updateState" @click="addUpdatedItem">Update Item</button>
       </div>
        <!--<p>{{todoList}}</p>-->
       <show-list></show-list>
 </div>
</template>


<script>
//import { mapState } from 'vuex';
import ShowList from './showlist.vue';
export default {
  components:{
      'show-list': ShowList
  },
  //can make some our function without get or set
  computed:{
     todoList:{
       get(){
        return this.$store.state.todoList
       },
       set(value){
         this.$store.commit("updateList",value)
       },
     
     },
       updateState(){
         return this.$store.state.updateState;
       }
    // ...mapState({
    //   todoList : state => state.todoList
    // })
  },
  data () {
    return {

  }
  },
  methods:{
       addItems(){
         this.$store.commit("addItems")
      },
      // updateList(e){
      //      this.$store.commit('updateList',e.target.value);
      // }
      addUpdatedItem(){
        this.$store.commit("addUpdatedItem")
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
#userInput{
    background-color: grey;
    width : 60%;
    margin: 0 auto;
    box-sizing: border-box;
    padding:30px;
    border-radius:4px;
}
#userInput input{
    padding: 30px;
    margin-left:2em;
    width:50%;
    border-radius: 20px;
}
#userInput button{
    display: inline-block;
    padding:2em;
    border-radius:4px;
    font-weight: bold;
    background-color:green;
    margin-left:2em;
    
}
#userInput button:hover{
    background-color: darkgreen;
}

</style>
