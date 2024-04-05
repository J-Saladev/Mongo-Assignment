
<template>
  <header>

  <navBar style="
  position: sticky;
  top: 0;
  z-index: 100;"
  :user="user"
  />
  
</header>
  
  <logIn v-if = "!user.loggedIn" style="
  padding: 1%;
  height: 100vh;
  "
  :user="user"
  @logIn="logInHandler($event)"
  />

  <RouterView v-else style="
  padding: 1%;
  height: 100vh;
  "
  />
 

  <footBar/>


  

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/nav-bar.vue';
import footBar from './components/foot-bar.vue';
import logIn from './components/log-in.vue';
import axios from 'axios';


const user = {
  loggedIn: false

  }


const logInHandler = (event) => {
  
  const thisuser = event

  axios.post('http://localhost:5000/login', thisuser ).then((response) => {
    if (response.data == 'User not found') {
      alert('User not found')
      document.location.reload()
    } else {
      response.data.loggedIn = true
      
      user.value = response.data
      
      
    }
  }).catch((error) => {
    console.log(error)
  })
}

</script>


