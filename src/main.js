import Vue from 'vue'
console.log(Vue);
import App from './App.vue'
import {store} from './store/store';
//import vueResource from "vue-resource";
import vueRouter from "vue-router";
import Routes from './routes/router.js'

import firebase from "firebase";
Vue.config.productionTip = false;

   //Your web app's Firebase configuration
  //For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //what we need for authentication 
  const firebaseConfig = {
    apiKey: "AIzaSyBLI60AMgZmxmg_lw_SaHdMHI1uE6uIeVY",
    authDomain: "todo-app-240cc.firebaseapp.com",
    databaseURL: "https://todo-app-240cc.firebaseio.com",
    projectId: "todo-app-240cc",
    storageBucket: "todo-app-240cc.appspot.com",
    messagingSenderId: "514846572215",
    appId: "1:514846572215:web:19491d11184be7d4fc5732",
    measurementId: "G-MJH1D1E2C7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();// why??
//Vue.use(vueResource);
Vue.use(vueRouter);
// all components imported
// import todoList from './components/todoapp/todo.vue'
// import SignUp from './components/todoapp/todosignup.vue'
// import SignIn from './components/todoapp/todosignin.vue'
// import AboutUs from './components/todoapp/aboutus.vue';
// import Try from './components/try.vue';
// import Try2 from './components/try2.vue';
// //now created all compnents

// //have not to be global
// Vue.component("todo",todoList);
// Vue.component("signup",SignUp);
// Vue.component("signin",SignIn);
// Vue.component("aboutus",AboutUs);
// Vue.component("try",Try);
// Vue.component("try2",Try2);
// //router

const router = new vueRouter(
{
 routes : Routes,
 mode: "history"
}

)


new Vue({
  store:store,
  el: '#app',
  render: h => h(App),//importing app.vue to this instance root component which is then impoted here and then render to this vue el "app" and show to the browser.
  router : router,
  data:{
   
  }
})
