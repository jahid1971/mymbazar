<script>

</script>

<template>
  <main class=" min-h-[55vh] mt-20">

    <div class="text-center">
      <router-link :to="{ name: 'product' }" class="bg-red-400">
        <button class=" btn bg-blue-600  hover:bg-blue-800 py-2 mb-12 text-xl ">Admin Products</button>
      </router-link>
    </div>

    <div class="text-center">
      <router-link :to="{ name: 'category' }">
        <button class="btn bg-blue-600  hover:bg-blue-800 py-2 mb-12 text-xl mx-auto  ">Admin Categories</button>
      </router-link>
    </div>
    <div class="text-center">
      <router-link to="">
        <button class="btn bg-blue-600  hover:bg-blue-800 py-2 mb-12 text-xl mx-auto  ">Admin Gallery</button>
      </router-link>
    </div>








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