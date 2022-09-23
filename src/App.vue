<script>
  import axios from 'axios'
  import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'
  import NavBar from './components/components/NavBar.vue'
  import myFooter from './components/components/footer.vue'


  export default {
    components: {
      NavBar, myFooter

    },
    data() {
      return {
        baseUrl: "https://limitless-lake-55070.herokuapp.com/",
        category: null,
        products: null
      }
    },
    methods: {
      async getFetchData() {
        await axios.get(`${this.baseUrl}/category/`)
          .then(res => this.category = res.data)
        // .then(data => console.log(this.category))
        // .catch( err=> console.log('errrrrrrrrr  '+err+"eeeeeeeeeeeeeeeeerorrr   "))
      },

      async getProducts() {
        await axios.get(`${this.baseUrl}product/`)
          .then(res => this.products = res.data)
        // .catch( err => console.log("errrrrrrrrr=                   "+err+"eeeeeeeeeeeeeeeeerorrr   "))
      }
    },
    mounted() {
      this.getFetchData()
      this.getProducts()


    }
  }


</script>

<template>
  <div>

    <NavBar v-if="products" :products="products" />



    <router-view v-if="category && products" :category="category" :products="products" :baseUrl="baseUrl"
      @fetch="getFetchData">
    </router-view>

    <div>
      <index />
    </div>

    <myFooter />

  </div>
</template>

<style >
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
