<template>
  <div v-if="products">
    <div class="navbar bg-slate-700 text-white lg:px-10  flex justify-between">
      <div class="navbar-start w-2/12 ">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Account
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li><a class="">Sign up</a></li>
                <li><a>Log in</a></li>
              </ul>
            </li>
            <li><a>Admin</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-3xl italic ">Mym<span class="text-amber-400">Bazar</span></a>

      </div>


      <div class="navbar-end  flex  w-10/12">

        <!-- search  -->

        <form class="flex items-center  lg:w-8/12">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="dropdown dropdown-hover relative w-full">
            <div class=" flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input v-model="inputValue"  type="text" id="" tabindex="0"
              class=" bg-slate-100  text-gray-900 text-base rounded-l-lg focus:border-blue-500 focus:ring-2  focus:ring-blue-300 block w-full pl-10    placeholder:text-lg"
              placeholder="Search items" required="">

            <ul  tabindex="0"
              class=" max-h-96 overflow-y-scroll absolute w-full dropdown-content menu  shadow bg-slate-100 text-slate-700 border-t-0">
              <li class="pl-6" @click="select(i)"  v-for="i in suggestItems" :key="i.id"><a>{{i.name}}</a></li>
            </ul>
          </div>
         

          <!-- search button  -->
       
          <router-link v-if="selectedId" :to="{name : 'productDeatils' , params:{id : selectedId.id }}">
                <button type="submit"
                class="p-2.5  text-sm font-medium text-white bg-amber-500 rounded-r-lg bg-opacity-90 hover:bg-amber-600 focus:ring-2 focus:ring-black-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
          </router-link>

        </form>

        <div class=" hidden lg:flex  ">
          <ul class="menu menu-horizontal  p-0">
            <li class="lg:ml-2    ">
              <!-- <router-link to="" class="menu-title"> Home </router-link> -->
              <a class="flex flex-col">Browse
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>

              <ul class="p-2 bg-slate-700">
                <li>
                  <router-link :to="{name:'home'}">Home</router-link>
                </li>
                <li>
                  <router-link :to="{name:'category'}">Category</router-link>
                </li>
                <li>
                  <router-link :to="{name:'product'}">Product</router-link>
                </li>
              </ul>
            </li>

            <li tabindex="0">
              <a @click="toggle" class="flex flex-col">
                Account
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-slate-700">
                <li>
                  <router-link :to="{name:'admin'}">Admin</router-link>
                </li>
                <li>
                  <router-link :to="{name:'signUp'}">Sign up</router-link>
                </li>
                <li>
                  <router-link :to="{name:'signIn'}">Log in</router-link>
                </li>
              </ul>
            </li>
            <li class="flex items-start">
              <router-link to="">Order</router-link>
            </li>
            <li class="flex items-start">
              <router-link class="" to="">

                <i class="fa-solid fa-cart-shopping  relative bottom-2 right-3 text-3xl">
                  <div
                    class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full ">
                    20</div>
                </i>
                <span class="absolute right-0 top-3">Cart</span>
              </router-link>

            </li>

          </ul>
        </div>



      </div>
    </div>
      <!-- <div v-if="selectedId">{{selectedId.id}}</div> -->
 

  </div>

</template>



<script>
  export default {
    props: ["products"],
    data() {
      return {
        inputValue: "",
        isVisible: false,
        inputValue: null,
        selectedId : null
     }
    },
    methods: {
      // toggle() {
      //   this.isVisible = !this.isVisible
      // },
      select(i){
       this.inputValue = i.name
        this.selectedId = i
      }
    },
    computed: {
    suggestItems(){
           let item = this.products.filter(p => {  
        if(p.name) return p.name.includes(this.inputValue)
      })
      return item
    }

    }

  }



</script>

<style>

</style>