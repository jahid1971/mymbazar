import { createRouter, createWebHistory } from 'vue-router'
import  home from '../views/Home.vue'
import signUp from '../views/signUp.vue'
import signIn from '../views/signIn.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import editCategory from '../views/Category/EditCategory.vue'
import productList from '../views/Category/productList.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/Admin.vue'
import Products from '../views/products/products.vue' 
import editProduct from '../views/products/EditProducts.vue' 
import productDetails from '../views/products/productDetails.vue' 
import addProduct from '../views/products/addProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/admin/category/add',
      name: 'addCategory',
      component: AddCategory
    },
    {
      path: '/admin/category',
      name: 'category',
      component: Category
    },
    {
      path: '/admin/category/product-list/:id',
      name: 'productList',
      component: productList
    },
    {
      path: '/admin/category/:id',
      name: 'editCategory',
      component: editCategory
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/product/',
      name: 'product',
      component: Products
    },
    {
      path: '/admin/product/:id',
      name: 'editProduct',
      component: editProduct
    },
    {
      path: '/admin/product/details/:id',
      name: 'productDeatils',
      component: productDetails
    },
    {
      path: '/admin/product/addProduct',
      name: 'addProduct',
      component: addProduct
    },
  ]
})

export default router
