<template>
    <div class="w-8/12 mx-auto">
        <h1 class="text-3xl font-medium py-3 text-center">Shoppig cart</h1>
        <div v-for="cartItem in cartItems" :key="cartItem.id" class=" mx-auto py-5 border-b-2">
            <div class="w-10/12 flex justify-between mx-auto ">
                <div class="w-4/12">
                    <img :src="cartItem.product.imageURL" class="aspect-video object-cover">
                </div>

                <div class="w-7/12 flex justify-between items-center text-lg">
                    <div class="flex flex-col">
                        <h1 class="font-semibold mb-4 text-blue-500">{{cartItem.product.name}}</h1>
                        <h1 class="font-semibold">$ {{cartItem.product.price}} per Unit</h1>
                        <h1>{{cartItem.quantity}}</h1>
                        <button class="text-blue-500  hover:link-hover">Remove from cart</button>
                    </div>
                    <div>
                        <h1>Total :<span class="font-semibold mr-12">$
                                {{cartItem.product.price*cartItem.quantity}}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>

        <div class=" text-right py-2">
            <h5 class="text-3xl mb-1">Total : ${{totalCost }}</h5>
            <button class="button-blue"> Confirm order</button>
        </div>
    </div>
</template>

<script>
    //784a9ab8-4c9d-4973-8f13-4891ebb1acc3

    import axios from 'axios';
    export default {
        props: ["baseUrl"],
        data() {
            return {
                cartItems: [],
                totalCost: 0,
                token: null
            }
        },
        methods: {
            // addToCart() {

            //     this.token = localStorage.getItem("token")
            //     axios.get(`${this.baseUrl}cart/?token=${this.token}`)
            //         .then(res => {
            //             const result = res.data
            //             console.log(result)
            //             this.cartItems = result.cartItems
            //             this.totalCost = result.totalCost
            //         })

            // }
        },
        mounted() {
            this.token = localStorage.getItem("token")
            axios.get(`${this.baseUrl}cart/?token=${this.token}`)
                .then(res => {
                    const result = res.data
                    console.log(result)
                    this.cartItems = result.cartItems
                    this.totalCost = result.totalCost
                })

        }
    }
</script>