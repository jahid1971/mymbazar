<template>
    <div v-if="toEditCategory" class="conatiner ">
        <div class="w-3/12 mx-auto mt-10 text-center ">
            <h1 class="text-3xl mb-5">Edit category</h1>

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Category Name</label>
            <input v-model="toEditCategory.categoryName"  class="applied-input mb-4 " placeholder="input">

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Description</label>
            <input v-model="toEditCategory.description" class="applied-input mb-4" placeholder="input">

            <label for="email" class="block mb-2 text-xl  text-gray-900 dark:text-gray-300">Image Url</label>
            <input v-model="toEditCategory.imageUrl" class="applied-input mb-4 " placeholder="input">

            <button type="button" @click="editCategory"  class="button-blue">
              SUBMIT
            </button>



        </div>

    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {

    data() {
        return {
            id:null,
            toEditCategory: {}
        }
    },
    methods:{
        async  editCategory(){
            delete this.toEditCategory['product']
            await axios.post(`${this.baseUrl}category/update/${this.id}`, this.toEditCategory )
            .then(()=>{
                console.log(this.toEditCategory)
                this.$emit("fetch")
                this.$router.push({name:"category"})
                swal({
                    text:"category added successfully",
                    icon:"success"
                })
            }) 

        }
    },
    props: ["category","baseUrl"],

    mounted() {
        this.id = this.$route.params.id
        this.toEditCategory = this.category.find(x => x.id == this.id )
        console.log(this.category.length,"mounted")
       
    }
}
</script>

<style>
.applied-input{
    @apply block p-1.5 text-xl pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}

</style>