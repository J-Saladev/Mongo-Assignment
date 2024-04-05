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
          <a class="nav-link" href="/patients">Patients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/doctors">Doctors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/appointments" v-if="user.permission == 'admin'">Appointments</a>
          <a class="nav-link" href="/appointments/{{ user }}" v-else>Your Appointments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/user/{{ user.id }}" >User</a>
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





</script>