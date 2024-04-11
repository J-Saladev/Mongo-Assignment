<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand ms-5" href="#">New Clinic</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/patients" v-if="user.permission == 'admin'">Patients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/doctors" v-if = "!user.loggedIn == false">Doctors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/appointments" v-if="user.permission == 'admin'">Appointments</a>
          <a class="nav-link" href="/appointments/{{ user }}" v-else-if="user.loggedIn == true">Your Appointments</a>


        </li>
        
        <li class="nav-item dropdown" v-if="user.loggedIn != false">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </a>
        <div class="dropdown-menu dropdown-menu-left bg-dark" aria-labelledby="navbarDropdown" id="dropdownuser">
          <a class="dropdown-item text-white" href="/user/{{ user.id }}">View Info</a>
          <a class="dropdown-item text-white"  @click="$emit('logOut')">Log out</a>
          
        </div>
      </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['user'])
const user = ref(props.user)
if (!user.value) {
  document.location.reload()
}





</script>
<style>
#dropdownuser {
  right: 0;
}
</style>