<template>
    <div>

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-5 mx-auto flex flex-wrap items-center">
                <div
                    class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-2xl font-medium title-font mb-4">Sign-In</h2>

                    <div class="relative mb-2">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
                        <input v-model="user.email" type="text" id="full-name" name="full-name"
                            class="myInput">
                    </div>
                    <div class="relative mb-2">
                        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
                        <input v-model="user.password" type="email" id="email" name="email"
                            class="myInput">
                    </div>
                    <button @click="signIn" class="button-blue mt-2">Continue</button>
                    <p class="text-sm text-gray-500 mt-3">By continuing, you agree to Simplecoding's
                        Conditions of Use and
                        Privacy Notice.</p>

                    <hr class=" my-5 border border-slate-300">

                    <div class=" text-center">
                        <h5 class="text-sm text-slate-500">New to Mymbazar?</h5>
                        <button class="btn btn-sm  bg-opacity-60  lowercase">Create your mymbazar
                            account</button>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        props: ["baseUrl"],
        data() {
            return {
                user: {
                    email: null,
                    password: null
                }
            }
        },

        methods: {
            async signIn(e) {
                e.preventDefault();
                console.log(this.user)
                await axios.post(`${this.baseUrl}user/signIn`, this.user)
                    .then((res) => {
                        localStorage.setItem('token', res.data.token)
                        this.$router.replace("/")
                        swal({
                            text: "Sign in successfulo",
                            icon: "success"
                        })
                    })
                    .catch(err => console.log("errorrr....", err))
            }
        }
    }

</script>