<template>
  <div>
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
        <a class="btn btn-ghost normal-case text-2xl italic ">Mym<span class="text-amber-400">Bazar</span></a>

      </div>


      <div class="navbar-end  flex  w-10/12">
      

        <form class="flex items-center  lg:w-8/12">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="simple-search"
              class="bg-slate-100  text-gray-900 text-sm rounded-l-lg focus:border-blue-500 focus:ring-2  focus:ring-blue-300 block w-full pl-10 p-2.5   placeholder:text-xl"
              placeholder="Search items" required="">
          </div>

          <button type="submit"
            class="p-2.5  text-sm font-medium text-white bg-amber-500 rounded-r-lg bg-opacity-90 hover:bg-amber-600 focus:ring-2 focus:ring-black-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>

        </form>

        <div class=" hidden lg:flex ">
            <ul class="menu menu-horizontal  p-0">
               <li class="lg:ml-5    ">
                <router-link to="" class="menu-title"> Item 1 </router-link>
               </li>  
              <li tabindex="0">
                <a @click="toggle">
                 Account
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul   class="p-2 bg-slate-700">
                  <li><router-link :to="{name:'signUp'}">Sign up</router-link></li>
                  <li><a>Log in</a></li>
                </ul>
              </li>
              <li class="   ">
                <router-link to="admin"  class=" btn bg-slate-700 hover:text-slate-200 hover:rounded-lg hover:-translate-y-0.5 transform transition ">
                  Admin</router-link>
              </li>
             
            </ul>
          </div>



      </div>
    </div> 
  </div>

</template>



<script>
 export default {
     data(){
      return{
         isVisible:false
      }
     },
     methods:{
        toggle(){
          this.isVisible =! this.isVisible
        }
     }
 }



</script>

<style>

</style>