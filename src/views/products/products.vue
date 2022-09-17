<template lang="">

<div>
  
    <div class=" w-10/12 mx-auto ">
    <h1 class="  text-3xl font-medium text-center my-5">Our Products</h1> 
    <div class="    grid    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
        <router-link :to="{name:'addProduct'}"  class="col-span-3 ml-7 ">
                <button class="btn bg-slate-100 text-black hover:text-white px-1 ">Add product</button>
            </router-link>
       <div v-for="product in products.slice(0,15)" :key="index" >
         <ProductBox :product="product" /> 
       </div>

    </div>
</div>

</div>
</template>

<script>
import ProductBox from '../../components/components/productBox.vue'
export default {
    components: {
        ProductBox
    },
    props: ["products"]
}
</script>