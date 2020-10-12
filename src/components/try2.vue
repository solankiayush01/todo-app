
<template>
  <div>
   <h2>List Data</h2>
   <ol>
   <li v-for="(listData,index) in listArr" :key="index" @dblclick="updateItem(index)">
       {{listData}} 
       <button @click="remove(index)">X</button>
   </li>
    </ol>
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
    remove(index){
      this.$store.commit('remove',index);
    },
    updateItem(index){
      this.$store.commit('updateItem',index)
    }
   
   },
  
created(){
 
}
}
</script>
<style scoped>

</style>
