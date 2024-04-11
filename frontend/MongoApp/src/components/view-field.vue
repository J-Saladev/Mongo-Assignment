<template>
    <div>
        <h1 class="text-center " >{{ fieldname }}</h1>
        
    <div class="container mt-5" v-if="fields.length > 0">
  <table class="table table-dark" >
    <thead>
      <tr>
        <th v-for="(keyvalue, index) in fields" :key="index">{{ keyvalue.key }}</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="(keyvalue, index) in fields" :key="index">
        <td v-for="(value, index) in keyvalue.value" :key="index">{{ value }}</td>
        <td> <i class="bi bi-pencil-square text-warning " @click="$emit('edit', keyvalue)"></i><i class="bi bi-trash text-danger ms-3" @click="$emit('delete', keyvalue.id)"></i>  </td>
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



</script>