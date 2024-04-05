<template>
    <div>
        <h1 class="text-center">Welcome to the Clinic!</h1>
        <h3 class="text-center ">Please Login to access info!</h3>
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Login</h5>
        </div>
        <div class="modal-body">
            <form>
            <div class="form-group">
                <label for="username" >Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="user.username">
            </div>
            <div class="form-group">
                <label for="password" >Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password " v-model="user.password">
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="$emit('logIn', user)">Login</button>

        </div>
        </div>
    </div>
</div>
</template>
<script setup>
const user = {
    username: '',
    password: ''
}




</script>

<style scoped>
    body {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
      color: #fff;
    }
    .modal-content {
      background-color: #444;
      color: #fff;
    }
    .modal-header, .modal-footer {
      border-color: #555;
    }
  </style>