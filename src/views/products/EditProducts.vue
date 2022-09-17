<script>
import axios from 'axios'
import swal from 'sweetalert'
    export default{
        props: ["products" ,"category" , "baseUrl"],
        data(){
            return{
             id : null,
             product : {}
            }
        },
        methods:{
          async editProduct(){
            console.log(this.product)
            await axios.post(`${this.baseUrl}product/update/${this.product.id}`,this.product)
            .then(swal({
                Text:"product updated succeccfully",
                icon: "success"
            }))
            .then(()=> this.$router.push({name:"product"}))

           }
        },

        mounted(){
           this.id = this.$route.params.id
           this.product = this.products.find(x => x.id == this.id)
        }

    }
</script>

<template>
      <div class="conatiner ">

        {{product}}

        <div class="w-3/12 mx-auto mt-10 text-center ">
            <h1 class="text-3xl mb-5">Edit category</h1>
             
        

            <label for="myCategory" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Category Name</label>
            <select v-model="product.categoryId"  id="myCategory" class="applied-input mb-4" required>
                <!-- <option value="" selected></option> -->
                <option v-for="item in category" :key="item.id" :value="item.id">{{item.categoryName}}</option>
            </select>

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Product Name</label>
            <input v-model="product.name" class="applied-input  mb-4 " placeholder="input">

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Description</label>
            <input  v-model="product.description"   class="applied-input mb-4" placeholder="input">

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Price</label>
            <input  v-model="product.price"   class="applied-input mb-4" placeholder="input">

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Image Url</label>
            <input  v-model="product.imageURL"  class="applied-input mb-4 " placeholder="input">

            <button @click="editProduct" type="button"   class="button-blue">
              SUBMIT
            </button>



        </div>

    </div>
</template>

<style>

</style>