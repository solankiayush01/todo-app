<template>
    <div>
     <footer>
         <h2>Todo App....</h2>
         <pre>
            created By: Ayush Solanki
            Copyright:&copy;Ayush Solanki
            Contact:9983883289
            E-Mail: ayush10@gmail.com

            </pre>
            <p>
                You can also Join using:
            </p>
            <ol>
                <li><a href="www.google.com">Google</a></li>
                <li><a href="www.facebook.com">Facebook</a></li>
                <li><a href="www.twitter.com">Twitter</a></li>
                <li><a href="www.instagram.com">Instagram</a></li>
            </ol>
    </footer>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
footer{
  height: 100%;
  color:white;
  background-color:black;

}
footer h2{
  font-size:4em;
}
footer p{
  text-align:center
}
footer ol{
  text-align: center;
}
.underline{
  text-decoration:underline;
}
li:hover{
  text-decoration: underline;
}

</style>