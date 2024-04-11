<template>
    <div>
        
       <i class="bi bi-plus-circle text-primary" @click="openModal"></i>
        <addField > 
            <form >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select class="form-control" id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="number">Number</label>
            <input type="text" class="form-control" id="number" placeholder="Enter your number">
          </div>
        </form>
        </addField>
        
        <viewField :fields = "users" :fieldname="'Patients'" ></viewField>
        
       

    </div>
</template>

<script async setup>
import addField from '../components/add-field.vue';
import viewField from '../components/view-field.vue';
import { ref } from 'vue';
import axios from 'axios';


const user = JSON.parse(localStorage.getItem('user'))
const users = ref([])
users.value = await getUsers()

console.log(users)
function getUsers() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/Users').then((response) => {
            resolve(response.data)
            console.log(response.data)

            
        }).catch((error) => {
            reject(error)
        })
    })
    
}









</script>