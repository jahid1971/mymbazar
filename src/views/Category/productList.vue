<template>
    <div v-if="category && availableCategory" class="w-11/12 lg:w-9/12 my-10 mx-auto">
        <div class="text-center my-10">
            <h1 class="text-3xl font-semibold">
                {{ availableCategory.categoryName }}
            </h1>
            <h1 v-if="availableCategory.products" class="text-2xl mt-2 font-medium text-slate-600">
                {{ availableCategory.products.length }} products found
            </h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between">
            <div v-for="product in availableCategory.products" :key="product">
                <ProductBox :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductBox from "../../components/components/productBox.vue";
export default {
    props: ["category"],
    components: {
        ProductBox,
    },

    data() {
        return {
            availableCategory: [],
        };
    },
    mounted() {
        this.availableCategory = this.category.find(
            (x) => x.id == this.$route.params.id
        );
    },
    components: { ProductBox },
};
</script>

<style>

</style>