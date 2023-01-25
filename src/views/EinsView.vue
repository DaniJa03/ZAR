<template>
  <div class="container">
    <h2 class="text-center fs-1 my-5 fw-bold text-light">
      <span class="u1">All</span><span class="u2">gem</span><span class="u3">eine</span>
      <span class="u4">Infos</span>
    </h2>
    <div class="text-light">
      <li class="fs-2 my-5">
        <span class="u1 fw-bold">Staatsform:</span> präsidentielle Republik mit Mehrparteiensystem
      </li>
      <li class="fs-2 my-5"><span class="u2 fw-bold">Einwohneranzahl:</span> 5,5 Mio.</li>
      <li class="fs-2 my-5"><span class="u3 fw-bold">Amtssprache:</span> Sango & Französisch</li>
      <li class="fs-2 my-5">
        <span class="u4 fw-bold">Problem:</span> eines der ärmsten Länder der Welt
      </li>
    </div>
    <div class="btnEnd">
      <RouterLink to="/zwei">
        <button class="btn btn-success fs-5">Next</button>
      </RouterLink>
      <RouterLink to="/">
        <button class="btn btn-danger fs-5 mx-1">Back</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>
