<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>

  <main class=" min-h-[55vh] mt-20">

    <router-link :to="{ name: 'product' }">
      <button class=" btn bg-blue-600  hover:bg-blue-800 py-2 mb-12 text-xl block mx-auto ">Admin Products</button>
    </router-link>

    <router-link :to="{ name: 'category' }">
      <button class="btn bg-blue-600  hover:bg-blue-800 py-2 mb-12 text-xl block mx-auto  ">Admin Categories</button>
    </router-link>


    <router-link to="">
      <button class="btn bg-blue-600  hover:bg-blue-800 py-2 mb-12 text-xl block mx-auto  ">Admin Gallery</button>
    </router-link>









  </main>
</template>

<style>
/* .focus {}

.focus:focus {
  @apply border-blue-500 ring-blue-500
} */

/* .center {
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid green; 
} */
</style>