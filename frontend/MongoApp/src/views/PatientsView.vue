<template>
    <div>
        
       
        <addField 
        @close="closeModal"
        @save="saveRecord"
        
        > 
            <form id ="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name" required>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select class="form-control" id="gender" required>
              <option selected disabled value="">Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="number">Number</label>
            <input type="text" class="form-control" id="number" placeholder="Enter number" required>
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter address" required>
          </div>
          <div class="form-group">
            <label for="zipcode">Zipcode</label>
            <input type="text" class="form-control" id="zipcode" placeholder="Enter zipcode" required>
          </div>
          <div class="form-group">
            <label for ="birthdate">Birthdate</label>
            <input type="date" class="form-control" id="birthdate" placeholder="Enter birthdate" required>
          </div>
          <div class="form-group">
            <label for ="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" required>
          </div>
          <div class="form-group">
            <label for ="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" required>
          </div>
          <div class ="form-group">
            <label for ="permission">Permission</label>
            <select class="form-control" id="permission" required>
              <option selected disabled>Choose...</option>
              <option>Guest</option>
              <option>Admin</option>
            </select>
          </div>

        </form>
        </addField>
        
        <viewField :fields = "users" :fieldname="'Patients'" 
        @open="openModal"
        @delete="deleteRecord"
        ></viewField>
        
       

    </div>
</template>

<script async setup>
import addField from '../components/add-field.vue';
import viewField from '../components/view-field.vue';
import { ref } from 'vue';
import axios from 'axios';


const user = JSON.parse(localStorage.getItem('user'))
// const users = ref([])
// users.value = await getUsers()

const users = ref(await getUsers())


function getUsers() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5000/Users').then((response) => {
            resolve(response.data)
            

            
        }).catch((error) => {
            reject(error)
        })
    })
    
}

function openModal() {
    document.getElementById('addModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('addModal').style.display = 'none';
}

function saveRecord() {
    let form = document.getElementById('form')
    if (!form.checkValidity()) {
        form.classList.add('was-validated')
        form.reportValidity()
        return
    }

    const newRecord = {
        name: document.getElementById('name').value,
        gender: document.getElementById('gender').value,
        number: document.getElementById('number').value,
        address: document.getElementById('address').value,
        zipcode: document.getElementById('zipcode').value,
        birthdate: document.getElementById('birthdate').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        permission: document.getElementById('permission').value
    }
    if (!recordHandler(newRecord)) {
        alert('Record not saved!')
        return
    }




    axios.post('http://localhost:5000/Users', newRecord).then((response) => {
        console.log(response.data)
        
    }).catch((error) => {
        console.log(error)
    })

    document.getElementById('addModal').style.display = 'none';
    window.location.reload()
}

function deleteRecord(record) {
  console.log(record)
  
    axios.delete(`http://localhost:5000/Users/${record.username}`).then((response) => {
        console.log(response.data)
        window.location.reload()
        
    }).catch((error) => {
        console.log(error)
    })
}

function recordHandler(record) {
    // Here you can add handlers but I will leave it for now
    return true
    
}








</script>