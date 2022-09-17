<template>
  <div v-if="category">
    <div  class=" max-w-sm bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center mx-auto">
       
      <router-link :to="{name : 'productList', params:{id:category.id}}">
          <img class="w-full  aspect-video  object-cover"  :src="category.imageUrl">
        </router-link>

      <div class="p-2">

        <router-link :to="{name : 'productList', params:{id:category.id}}">
          <span class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{category.categoryName}}</span>
        </router-link>
        
        <p class=" font-normal text-gray-700 dark:text-gray-400 ">{{category.description}}</p>
        <h4 class="mb-3"> Id no: <span>{{category.id}}</span></h4>
        
           <router-link v-show="$route.name=='category'" :to="{name: 'editCategory' , params:{id:category.id}}"> 
                 <button  class="edit">  Edit     </button>
           </router-link>
    
      </div>
    </div>
    

  </div>
</template>

<script>
export default {
  props: ["category","baseUrl"],


}
</script>

<style>
  .edit{
    @apply inline-flex items-center py-2 px-7 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
  }
.t-btn {
  @apply font-bold py-2 px-4 rounded;
}

.t-btn-blue {
  @apply bg-blue-600 text-white;
}

.t-btn-blue:hover {
  @apply bg-blue-800 ;
}
</style>