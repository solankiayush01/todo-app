<template>
<div id = "app">
  <todoHeader />
  <router-view></router-view>
  <todoFooter />
 </div>
</template>

<script>
import TodoHeader from './components/todoapp/todoheader';
import TodoFooter from './components/todoapp/todofooter'
export default {
 components:{
   'todoHeader' : TodoHeader,
   'todoFooter' : TodoFooter
 }

}
</script>
<style scoped>

</style>
