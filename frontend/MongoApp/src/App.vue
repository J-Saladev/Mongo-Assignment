
<template>
  <header>

  <navBar style="
  position: sticky;
  top: 0;
  z-index: 100;"
  :user="user"
  @logOut="logOutHandler()"
  />
  
</header>
  
  <logIn v-if = "!user.loggedIn" style="
  padding: 1%;
  height: 100vh;
  "
  :user="user"
  @logIn="logInHandler($event)"
  />
  <Suspense v-else>

  <RouterView  style="
  padding: 1%;
  height: 100vh;
  "
  />
 </Suspense>

  <footBar/>


  

</template>

<script async setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import navBar from './components/nav-bar.vue';
import footBar from './components/foot-bar.vue';
import logIn from './components/log-in.vue';
import axios from 'axios';


const user = localStorage.getItem('user')  ? JSON.parse(localStorage.getItem('user')) : ref({
  loggedIn: false

  }) 


const logInHandler = (event) => {
  
  const thisuser = event

  axios.post('http://localhost:5000/login', thisuser ).then((response) => {
    if (response.data == 'User not found') {
      alert('User not found')
      document.location.reload()
    } else {
      response.data.loggedIn = true
      
      user.value = response.data
      localStorage.setItem('user', JSON.stringify(user.value))
      document.location.reload()
      
      
    }
  }).catch((error) => {
    console.log(error)
  })
}

const logOutHandler = () => {
  console.log('log out')
  
  localStorage.removeItem('user')
  
  document.location.reload()
}

</script>


