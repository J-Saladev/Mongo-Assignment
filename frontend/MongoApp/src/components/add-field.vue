<template>
  <div>
    <div
      class="modal"
      id="addModal"
      tabindex="1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Or Edit</h5>
            <button type="button" class="" data-dismiss="modal" aria-label="Close" @click="$emit('close')">
              <i class="bi bi-x text-dark fa-2x" ></i>
            </button>
          </div>
          <div class="modal-body"><slot/></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="$emit('save')">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
