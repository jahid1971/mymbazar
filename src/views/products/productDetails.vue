<template>
    <div class="min-h-[55vh] py-10">
        <h1 class="text-3xl font-semibold text-center my-5">Product Details</h1>

        <div v-if="product" class="w-9/12 flex flex-col items-center gap-y-10 lg:flex-row justify-center mx-auto">
            <div class="w-8/12 lg:w-4/12 mr-10">
                <img class="" :src="product.imageURL" alt="" />
            </div>

            <div class="lg:w-8/12">
                <h1 class="text-2xl mb-1">{{ product.name }}</h1>
                <h3 class="text-2xl font-semibold">${{ product.price }}</h3>
                <p class="mb-2">{{ product.description }}</p>

                <div class="flex justify-between">
                    <div class="">
                        <label for="quantity" class="text-xl border border-slate-400 rounded-l-lg bg-slate-200 p-2">
                            Quantity
                        </label>
                        <input v-model="quantity" type="number"
                            class="border text-xl border-slate-500 w-14 rounded-r-lg p-2 focus:border focus:border-blue-500" />
                    </div>
                    <div>
                        <button @click="addToCart"
                            class="btn bg-amber-500 hover:bg-amber-700 er:bg-amber-700 bg-opacity-80"> Add to cart
                        </button>
                    </div>
                </div>

                <h1 class="text-2xl font-bold mt-4 mb-2">Features</h1>
                <div>
                    <ul class="text-xl list-disc">
                        <li class="mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veni mollitia?
                        </li>
                        <li class="mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, consequatur!
                        </li>
                        <li class="mb-2">Lorem ipsum dolor sit amet.</li>
                        <li class="mb-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor incidunt inventore, iusto
                            quod nam et!
                        </li>
                        <li class="mb-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto quod nam et!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { icon } from '@fortawesome/fontawesome-svg-core';
    import swal from 'sweetalert';
    import axios from 'axios';
    export default {
        props: ["products", "baseUrl"],
        data() {
            return {
                product: null,
                quantity: 1,
                token: null
            };
        },
        //784a9ab8-4c9d-4973-8f13-4891ebb1acc3
        methods: {
            async addToCart() {
                if (!this.token) {
                    swal({
                        text: "Please log in first!",
                        icon: "error"
                    })
                    return
                }
                axios.post(`${this.baseUrl}cart/add?token=${this.token}`, {
                    "productId": this.product.id,
                    "quantity": this.quantity
                })
                    .then((res) => {
                        console.log(res)
                        if (res.status == 201) {
                            swal({
                                text: res.data.message,
                                icon: "success"
                            })
                        }
                    }
                    ).catch(err => console.log("err...", err))
            }
        },
        mounted() {
            this.product = this.products.find(
                (product) => product.id == this.$route.params.id
            );
            this.token = localStorage.token
        },
    };
</script>
