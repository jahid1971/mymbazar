import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
// import navbar from "../router/components/components/Navbar.vue";
import signUp from "../views/signUp.vue";
import signIn from "../views/signIn.vue";
import AddCategory from "../views/Category/AddCategory.vue";
import editCategory from "../views/Category/EditCategory.vue";
import productList from "../views/Category/productList.vue";
import Category from "../views/Category/Category.vue";
import Admin from "../views/Admin.vue";
import Products from "../views/products/products.vue";
import editProduct from "../views/products/EditProducts.vue";
import productDetails from "../views/products/productDetails.vue";
import addProduct from "../views/products/addProduct.vue";
import cart from "../views/cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    // {
    //   path: "/",
    //   name: "navbar",
    //   component: navbar,
    // },
    {
      path: "/signUp",
      name: "signUp",
      component: signUp,
    },
    {
      path: "/signIn",
      name: "signIn",
      component: signIn,
    },

    {
      path: "/admin/category/add",
      name: "addCategory",
      component: AddCategory,
    },
    {
      path: "/admin/category",
      name: "category",
      component: Category,
    },
    {
      path: "/admin/category/product-list/:id",
      name: "productList",
      component: productList,
    },
    {
      path: "/admin/category/:id",
      name: "editCategory",
      component: editCategory,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/product/",
      name: "product",
      component: Products,
    },
    {
      path: "/cart",
      name: "cart",
      component: cart,
    },
    {
      path: "/admin/product/:id",
      name: "editProduct",
      component: editProduct,
    },
    {
      path: "/product/details/:id",
      name: "productDeatils",
      component: productDetails,
    },
    {
      path: "/admin/product/addProduct",
      name: "addProduct",
      component: addProduct,
    },
  ],
});

export default router;
