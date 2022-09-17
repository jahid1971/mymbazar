<template>

    <div class="form-control w-full max-w-xs mx-auto mt-20 prose  ">
        <h1 class="text-center font-medium mb-2"> Add category</h1>

        <label class="label ">
            <span class="label-text mx-auto text-lg font-medium   "> Name</span>
        </label>

        <input v-model="categoryName" type="text" class="input input-bordered input-sm  w-full max-w-xs  mb-2" />

        <label class="label">
            <span class="label-text mx-auto text-lg font-medium">Description</span>
        </label>

        <textarea v-model="description" class="textarea textarea-bordered mb-2"></textarea>


        <label class="label">
            <span class="label-text mx-auto text-lg font-medium">Image</span>
        </label>

        <input type="text" class="input input-bordered input-sm  w-full max-w-xs mb-2" />

        <button @click="addCategory"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 py-1 w-3/12 mx-auto my-2  border border-blue-700 rounded">
            Submit
        </button>

    </div>


</template>

<script>
 import axios from 'axios'
 import sweetalert from 'sweetalert'
// const axios = require("axios")
// const sweetalert = require('sweealert')
export default {
    data() {
        return {
            categoryName: '',
            description: '',
            imageUrl: ''
        }
    },
    methods: {
        addCategory() {
            const newCategory = {
                categoryName: 'this.categoryName',
                description: 'this.description',
                imageUrl: 'this.imageUrl'
            }
            const baseUrl = 'https://limitless-lake-55070.herokuapp.com/'

            axios({
                method : 'post',
                url : `${baseUrl}//category/create`,
                data : JSON.stringify(newCategory),
                headers : {
                    'content-type' : 'application/json'
                }
            }).then(() => {
                
            }).catch((err) => {
                sweetalert({
                    text: "category added",
                    icon : "success"
                })
            });
        }
    }
}
</script>