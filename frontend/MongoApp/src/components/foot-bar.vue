<template>
    <div>
        <footer class="footer bg-dark text-light text-center py-3">
            <div class="container">
                <span>&copy; {{ year }} Your Company</span>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());

</script>