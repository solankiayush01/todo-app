import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from "firebase/app";
import "firebase/auth";
Vue.use(Vuex);
 export const store = new Vuex.Store({
     state:{
           todoList:"",
           listArr:[],
           updateState:false,
           indexStore:0,
           email:"",
           password:"",
           error:"",
           signUpEmail:"",
           signUpPassword:"",
           logged:false,
           bgState:false,
           state:false,
           visible:true,
           underline:false,
           list : []
         },
        mutations:{
            addItems: state=>{
                if(state.todoList !== ""){
                state.listArr.push(state.todoList);
                state.todoList = "";
                }
            },
            //it is upading the store todo list value as according to input value
            updateList(state,value){
                state.todoList = value;
             },
            removeItem:(state,index)=>{
               state.listArr.splice(index,1);
            },
            updateItem:(state,index)=>{
                state.updateState=true;
                state.indexStore = index;
                state.todoList = state.listArr[index]
            },
            addUpdatedItem:state=>{
                state.listArr.splice(state.indexStore,1,state.todoList);
                state.todoList = "";
                state.updateState = false;
            },
            trackEmail(state,value){
                state.email = value;
            },
            trackPassword(state,value){
                state.password = value;
            },
            // submitDetails:state=>{
            //     firebase.auth().signInWithEmailAndPassword(state.email,state.password).then(user=>{
            //                     user.$router.replace({name:"home"})
            //                   },
            //                  err =>{
            //                      alert(err);
            //                  }
            //                   );
            // },
            trackSignUpEmail(state,value){
              state.signUpEmail = value;
            },
            trackSignUpPassword(state,value){
                state.signUpPassword = value
            },
            createNewUser(state){
                // firebase.auth().onAuthStateChanged(user =>{
                //    // this.state.logged = !!user;
                //     console.log(this.state.logged);
                //     this.state.state = !!user;
                //     this.state.visible = !user;
                //     this.state.underline = !!user;
                //     this.state.bgState= !!user;
                //   })
            },
            changeState(state){
                this.state.logged = true;
                this.state.bgState = true;
                this.state.state = true;
            },
            signOut(){
                try{
                    const data = firebase.auth().signOut();
                    console.log(data);
                }catch(err){
                  console.log(err);
                }
            }
        }
     
 });
 