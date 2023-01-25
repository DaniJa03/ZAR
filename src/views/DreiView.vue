<template>
  <div class="container">
    <h2 class="text-center fs-1 my-5 fw-bold text-light">
      <span>Söldnergruppe Wagner</span>
    </h2>
    <div class="text-light">
      <li class="u1 fs-2 my-5">
        <span class="text-light">Private russische Militärfirma</span>
      </li>
      <li class="u2 fs-2 my-5">
        <span class="text-light">Yevgeny Prigozhin</span>
      </li>
      <li class="u3 fs-2 my-5"><span class="text-light">Tätig in ZAR</span></li>
      <li class="u4 fs-2 my-5">
        <span class="text-light">Umstrittene Gruppe</span>
      </li>
      <li class="u1 fs-2 my-5">
        <span class="text-light">Größere russische Strategie</span>
      </li>
    </div>
    <div class="btnEnd">
      <RouterLink to="/ende">
        <button class="btn btn-success fs-5">Next</button>
      </RouterLink>
      <RouterLink to="/zwei">
        <button class="btn btn-danger fs-5 mx-1">Back</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
