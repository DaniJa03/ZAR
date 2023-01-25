<template>
  <div class="container">
    <h2 class="text-center fs-1 my-5 fw-bold text-light"><span class="u1">Zentral</span><span class="u2">afrika</span><span class="u3">nische</span> <span class="u4">Republik</span></h2>
    <p class="text-center fs-4 my-5 text-light">by Dani Jaber & Ena Zekic</p>
    <div class="text-center my-6">
      <img class="mx-4" src="Flagge.png" height="250">
      <img src="Problems.png" height="250">
    </div>
    <div class="btnEnd">
    <RouterLink to="/eins">
      <button class="btn btn-success fs-5">Next</button>
    </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
