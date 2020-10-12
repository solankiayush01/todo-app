
import todoApp from '../components/todoapp/todo.vue';
import signUp from '../components/todoapp/todosignup.vue';
import signIn from '../components/todoapp/todosignin.vue';
import AboutUs from '../components/todoapp/aboutus.vue';

export default[
    {path :"/home",name:"home",component :todoApp},
    {path :"/signup",name:"signup",component :signUp},
    {path :"/",name:"signin",component :signIn},
    {path :"/aboutus",name:"aboutus",component :AboutUs}
];