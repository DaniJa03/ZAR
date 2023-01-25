<template>
  <div class="container">
    <RouterLink to="/zwei">
      <button class="btn btn-danger fs-5">Back</button>
    </RouterLink>
    <RouterLink to="/vier">
      <button class="btn btn-success fs-5">Next</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
