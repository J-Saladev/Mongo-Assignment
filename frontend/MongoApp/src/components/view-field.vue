<template>
    <div>
        <h1 class="text-center " >{{ fieldname }}</h1>
        <div class="d-flex">
        <i class="bi bi-plus-circle text-primary" @click="$emit('open')" style="cursor:pointer; font-size: 1.5rem; margin-left:25%;"></i>
        <h5 class="lead ms-3 mt-1">Add {{ removeS(fieldname) }}</h5>
        </div>
    <div class="container mt-5" v-if="fields.length > 0">
  <table class="table table-dark" >
    <thead>
      <tr>
        <th v-for="(key, index) in Object.keys(fields[0])" :key="index" style="text-transform: capitalize;">{{ key }}</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="(field, index) in fields" :key="index">
        <td v-for="(keyvalue, index) in Object.values(field)" :key="index">{{ keyvalue}}</td>
        <td> <i class="bi bi-pencil-square text-warning " @click="$emit('edit', keyvalue)" style="cursor: pointer;"></i><i class="bi bi-trash text-danger ms-3" @click="$emit('delete',field)" style="cursor: pointer;"></i>  </td>
      </tr>
    </tbody>
  </table>
</div>
    <div class="container mt-5 bg-light text-center border rounded p-5" v-else>
        <h1 class="text-center ">No Data</h1>

        
    </div>

    </div>

</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['fields' , 'fieldname'])
const fields = ref(props.fields)
const fieldname = ref(props.fieldname)
console.log(fields.value[0])



function removeS(str) {
  
  return str.slice(0, str.lastIndexOf('s'));
}



</script>