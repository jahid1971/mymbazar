<template>
    <div v-if="product">


        <div class="max-w-sm  bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center mx-auto  ease-in-out transition-all duration-500 hover:scale-105 hover:shadow-2xl     ">
            
            <router-link :to="{name: 'productDeatils' , params : {id:product.id}} ">
                <img class=" w-full  aspect-video  object-cover"  :src="product.imageURL" alt="">
            </router-link>

            <div class="p-2">

                <router-link :to="{name: 'productDeatils' , params : {id:product.id}} ">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.name }}</h5>
                </router-link>
               
                <p class=" font-normal text-gray-700 dark:text-gray-400 ">{{(product.description)&&(product.description.length>30)?product.description.slice(0,30)+"...":product.description }}</p>
                <h4 class="mb-3"> Price: $<span>{{ product.price }}</span></h4>
                <router-link v-if="$route.name== 'product' " :to="{name:'editProduct' , params : {id:product.id} }">
                    <a class="edit">
                    Edit
                </a>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductBox",
    props: ["product" ]
}
</script>

<style>


/* .effect {
         
            transition: 0.5s all ease-in-out;
        }
     
        .effect:hover{
            transform: scale(1.1);
        } */

</style>