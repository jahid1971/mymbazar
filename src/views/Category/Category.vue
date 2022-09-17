<template>
    <div class=" pt-5">
        <h1 class=" text-3xl font-medium text-center my-5">Our Categories</h1>

        <div class=" w-10/12  mx-auto  grid    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
            <div v-for="(categoryItem, index) in category.slice(1,20)" :key="categoryItem.id">
                <CategoryBox :category="categoryItem" :index="index" />
            </div>
        </div>

    </div>
</template>

<script>
// import axios from 'axios'
import CategoryBox from '../../components/components/CategoryBox.vue'
export default {
    components: {
        CategoryBox
    },
    props: ["category"],

}
</script>