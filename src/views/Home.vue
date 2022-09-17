<template>
  <div>

<section>
  <div class="bg-cover h-[400px] md:h-[600px] lg:h-screen w-full background">
      <div class=" text-center py-36    ">
        <a href="" class=" bg-slate-50 text-3xl lg:text-4xl link-hover text-amber-500 font-bold p-3 rounded-lg">Start
          shoping</a>
      </div>
    </div>
</section>
 

    <section>
      <h1 class="text-3xl font-semibold text-center my-10"> Top Categories</h1>
    <div class="w-11/12 lg:w-9/12  mx-auto my-5 grid lg:grid-cols-3 grid-cols-1 gap-8 ">
      <div v-for="i in categorySize" :key="i" class="w-full">
        <categoryBox :category="category[i-1]" />
      </div>
    </div>
  </section>

  <hr>
 
  <section>
    <h1 class="text-3xl font-semibold text-center my-10"> Top Products</h1>
    <div class="w-11/12 lg:w-9/12  mx-auto my-5 grid lg:grid-cols-3 grid-cols-1 gap-8 ">
      <div v-for="i in productSize" :key="i" class="w-full">
        <productBox :product="products[i-1]" />
      </div>
    </div>

  </section>





  </div>
</template>

<script>
import categoryBox from '../components/components/CategoryBox.vue';
import productBox from '../components/components/productBox.vue';
export default {
  components: {
    categoryBox, productBox
  },
  props: ["category", "products"],
  data() {
    return {
      categorySize: 6,
      productSize: 6
    }
  },
  mounted() {
    if (this.category.length < this.categorySize )   this.categorySize = this.category.length
    if (this.products.length < this.productSize) this.productSize = this.products.length
  }

}

</script>

<style>
.background {
  background: url(../assets/home.png);
  /* height: 96vh; */
}
</style>
