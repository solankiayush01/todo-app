
<template>
<div>
    <input type="text" v-model="todoList">
    <button @click="addList">Add item</button>
    <button v-if="updateState" @click="addUpdatedItem">Update Items</button>
   
   </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components:{
     
  },
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
       addList(){
         this.$store.commit("addList")
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
#data{
    border:2px solid black;
    width:100px;
    padding:1.2em;
}
</style>
