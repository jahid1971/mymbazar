<template>
  <div>

    <section class="text-gray-600   ">
      <div class="container px-5 py-10 mx-auto flex flex-wrap items-center ">
        <div
          class=" border border-slate-300 lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-2xl font-medium title-font mb-4">Create Account</h2>

          <div class="relative mb-2 ">
            <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>

            <input v-model="user.email" type="text" id="full-name" name="" class=" myInput ">

          </div>
          <div class="flex justify-between space-x-4">
            <div class="relative mb-2 ">
              <label for="full-name" class="leading-7 text-sm text-gray-600">First Name</label>

              <input v-model="user.firstName" type="text" id="full-name" name="" class=" myInput ">

            </div>
            <div class=" mb-2">
              <label for="email" class="leading-7 text-sm text-gray-600">Last Name</label>

              <input v-model="user.lastName" type="email" id="email" name="email" class=" myInput ">

            </div>
          </div>

          <div class="relative mb-2 ">
            <label for="full-name" class="leading-7 text-sm text-gray-600">Password</label>

            <input v-model="user.password" type="text" id="full-name" name="" class=" myInput ">

          </div>

          <div class="relative mb-2 ">
            <label for="full-name" class="leading-7 text-sm text-gray-600">Confirm Password</label>

            <input v-model="user.confirmPassword" type="text" id="full-name" name="" class=" myInput ">

          </div>

          <button @click="submit" class="button-blue mt-2 ">Create Account</button>

          <hr class=" my-5 border border-slate-300">

          <div class=" text-center">
            <h5 class="text-sm text-slate-500">Already have an account ?</h5>
            <button class="btn btn-sm  bg-opacity-60 mt-2">Sign in here</button>
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
        firstName: null,
        lastName: null,
        password: null,
        confirmPassword: null
      }
    }
  },
  methods: {
    async submit() {
      if (this.user.password == this.user.confirmPassword) {

        await axios.post(`${this.baseUrl}user/signup`,this.user)
          .then( () => { 
            this.$router.replace("/")
            swal({
            text:"Sign up successfull",
            icon: "success",
          })
          })
          .catch(err => console.log("error...",err))
      }

      else {
        swal ({
          text: "Password doesn't match",
          icon : "success"
        })
      }
    }
  }
}
</script>

<style>

</style>