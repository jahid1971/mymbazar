<template v-if="products">

<div class="w-9/12 mx-auto">
   
  
     <div class="   mb-8 ">
            <h1 class="  text-3xl font-medium text-center my-5">Our Products</h1> 
            <div class="   mx-auto  grid    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
                <router-link :to="{name:'addProduct'}"  class="col-span-3 w-28 ml-auto">
                        <button class="btn hover:bg-blue-700  bg-slate-100 text-black hover:text-white px-1 w-full">Add product</button>
                </router-link>
            <div v-if="showPage1"  v-for="product in products.slice(0,15)" :key="product.id" >
                <ProductBox :product="product" /> 
            </div>
            <div v-if="showPage2"  v-for="product in products" :key="product.id" >
                <ProductBox :product="product" /> 
            </div>
            
            </div>
    
      </div>
       <div  class="text-right mb-7">
                    <button  @click="previous" class="button-blue " >Previous</button>
                    <button @click="next" class="button-blue ml-3" >Next</button>
        </div>
</div>
</template>

<script>
import ProductBox from "../../components/components/productBox.vue";
export default {
    props: ["products"],
    data(){
        return{
          showPage1 : true,
          showPage2 : false
        }
    },
    methods:{
       next(){
        this.showPage1 = false
        this.showPage2 = true
     
        window.scrollTo({ top: 0, behavior: 'smooth' })

       },
       previous(){
        this.showPage1 = true
        this.showPage2 = false
        window.scrollTo({ top: 0, behavior: 'smooth' })
       } 
    },
  components: {
    ProductBox,
  }

};
</script>